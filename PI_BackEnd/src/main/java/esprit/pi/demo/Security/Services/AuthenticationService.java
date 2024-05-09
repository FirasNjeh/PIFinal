package esprit.pi.demo.Security.Services;

import esprit.pi.demo.DTO.Firas.AuthenticationRequest;
import esprit.pi.demo.DTO.Firas.AuthenticationResponse;
import esprit.pi.demo.DTO.Firas.RegisterRequest;
import esprit.pi.demo.DTO.Firas.VerificationRequest;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public interface AuthenticationService {
     AuthenticationResponse register(RegisterRequest request) ;
     AuthenticationResponse authenticate(AuthenticationRequest request) ;
     void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
     AuthenticationResponse verifyCode(VerificationRequest verificationRequest);

     void forgotPassword(String email);

     void setPassword(String email, String newPassword);
}
