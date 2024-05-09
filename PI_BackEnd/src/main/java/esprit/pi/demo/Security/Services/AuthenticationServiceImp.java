package esprit.pi.demo.Security.Services;

import com.fasterxml.jackson.databind.ObjectMapper;
import esprit.pi.demo.DTO.Firas.AuthenticationRequest;
import esprit.pi.demo.DTO.Firas.AuthenticationResponse;
import esprit.pi.demo.DTO.Firas.RegisterRequest;
import esprit.pi.demo.DTO.Firas.VerificationRequest;
import esprit.pi.demo.Repository.Firas.PortefeuilleRepository;
import esprit.pi.demo.Repository.Firas.TokenRepository;
import esprit.pi.demo.Repository.Firas.UserRepository;
import esprit.pi.demo.Security.Jwt.JwtService;
import esprit.pi.demo.Services.Firas.EmailService;
import esprit.pi.demo.Services.Firas.ConnectionLogService;
import esprit.pi.demo.Services.Firas.PortefeuilleService;
import esprit.pi.demo.entities.Firas.Portefeuille;
import esprit.pi.demo.entities.Firas.Token;
import esprit.pi.demo.entities.Enumeration.TokenType;
import esprit.pi.demo.entities.Firas.User;
import esprit.pi.demo.tfa.TwoFactorAuthenticationService;
import jakarta.mail.MessagingException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.io.IOException;
import java.time.LocalDate;

@Service
@AllArgsConstructor
public class AuthenticationServiceImp implements AuthenticationService {
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PortefeuilleRepository portefeuilleRepository;
    private final PortefeuilleService portefeuilleService;
    private final TwoFactorAuthenticationService tfaService;
    private final ConnectionLogService connectionLogService;
    private EmailService emailService;
    @Override
    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .nom(request.getNom())
                .prenom(request.getPrenom())
                .email(request.getEmail())
                .mdp(passwordEncoder.encode(request.getMdp()))
                .role(request.getRole())
                .cin(request.getCin())
                .dateNaissance(request.getDateNaissance())
                .numtel(request.getNumtel())
                .adresse(request.getAdresse())
                .profession(request.getProfession())
                .genre(request.getGenre())
                .salaire(request.getSalaire())
                .age(calculateAge(request.getDateNaissance()))
                .banni(false)
                .mfEnabled(request.isMfEnabled())
                .build();
        if(request.isMfEnabled())
        {
            user.setSecret(tfaService.generateNewSecret());
        }

        var savedUser = userRepository.save(user);
        Portefeuille portefeuille = new Portefeuille();
        portefeuille.setUser(savedUser);
        portefeuilleRepository.save(portefeuille);
        portefeuille=portefeuilleService.getPortefeuilleById(portefeuille.getId());
        savedUser.setPortefeuilleUser(portefeuille);
        portefeuille.setRib(savedUser.getNumtel());
        userRepository.save(savedUser);



        String to = savedUser.getEmail();
        String subject = "Confirmation d'inscription";
        String text = "Bonjour " + savedUser.getNom() + ",\n\nVotre inscription à notre site FundHub a été confirmée avec succès.";
        emailService.sendEmail(to, subject, text);

        var jwtToken = jwtService.generateToken(user);
        saveUserToken(savedUser, jwtToken);
        var refreshToken =jwtService.generateRefreshToken(user) ;
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .mfEnabled(user.isMfEnabled())
                .secretImageUri(tfaService.generatrQrCodeImageUri(user.getSecret()))
                .build();
    }
    private void revokeAllUserTokens(User user){
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
        if(validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(t -> {
          t.setExpired(true);
          t.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder()
                .userToken(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),request.getMdp())
        );
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();
        connectionLogService.logConnection(user.getId());
        if(user.isMfEnabled()){
            return AuthenticationResponse.builder()
                    .accessToken("")
                    .refreshToken("")
                    .mfEnabled(true)
                    .build();
        }
        var jwtToken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user,jwtToken);
        var refreshToken =jwtService.generateRefreshToken(user) ;
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .mfEnabled(false)
                .build();
    }

    @Override
    public void refreshToken(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        final String authHeader= request.getHeader("Authorization");
        final String refreshToken;
        final String userEmail;
        if(authHeader== null ||!authHeader.startsWith("Bearer ")) {

            return;
        }
        refreshToken=authHeader.substring(7);
        userEmail= jwtService.extractUsername(refreshToken);
        if(userEmail != null){
             var  userDetails = this.userRepository.findByEmail(userEmail)
                     .orElseThrow();
            if (jwtService.isTokenValid(refreshToken,userDetails)){
                var accessToken = jwtService.generateToken(userDetails);
                revokeAllUserTokens(userDetails);
                saveUserToken(userDetails,accessToken);
                var authResponse = AuthenticationResponse.builder()
                        .accessToken(accessToken)
                        .refreshToken(refreshToken)
                        .build();
                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }

    }

    @Override
    public AuthenticationResponse verifyCode(VerificationRequest verificationRequest) {
        User user = userRepository
                .findByEmail(verificationRequest.getEmail())
                .orElseThrow(() -> new EntityNotFoundException(
                        String.format("No user found with %S", verificationRequest.getEmail()))
                );
        if (tfaService.isOtpNotValid(user.getSecret(), verificationRequest.getCode())) {

            throw new BadCredentialsException("Code is not correct");
        }
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .mfEnabled(user.isMfEnabled())
                .build();
    }

    @Override
    public void forgotPassword(String email) {
        User user =userRepository.findByEmail(email)
                .orElseThrow(
                        ()->new RuntimeException("User not found with this email "+email));
        try {
            emailService.sendSetPassword(email);
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send set password email");
        }
    }

    @Override
    public void setPassword(String email, String newPassword) {
        User user =userRepository.findByEmail(email)
                .orElseThrow(
                        ()->new RuntimeException("User not found with this email "+email));
        String encodedPassword = passwordEncoder.encode(newPassword);
        user.setMdp(encodedPassword);
        userRepository.save(user);
    }

    private int calculateAge(LocalDate dateNaissance) {
        LocalDate currentDate = LocalDate.now();
        int age = currentDate.getYear() - dateNaissance.getYear();
        if (dateNaissance.getMonthValue() > currentDate.getMonthValue() ||
                (dateNaissance.getMonthValue() == currentDate.getMonthValue() &&
                        dateNaissance.getDayOfMonth() > currentDate.getDayOfMonth())) {
            age--;
        }
        return age;
    }
}
