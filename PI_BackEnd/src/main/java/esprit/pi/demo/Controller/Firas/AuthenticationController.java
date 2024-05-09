package esprit.pi.demo.Controller.Firas;

import esprit.pi.demo.DTO.Firas.AuthenticationRequest;
import esprit.pi.demo.DTO.Firas.AuthenticationResponse;
import esprit.pi.demo.DTO.Firas.RegisterRequest;
import esprit.pi.demo.DTO.Firas.VerificationRequest;
import esprit.pi.demo.Security.Services.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;


@RestController
@RequestMapping("/api/v1/auth")
@AllArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request){

        var response = authenticationService.register(request);
        if(request.isMfEnabled()) {
            return  ResponseEntity.ok(response);
        }        return ResponseEntity.accepted().build();
    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(authenticationService.authenticate(request));

    }
    @PostMapping("/refresh-token")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        authenticationService.refreshToken(request,response);
    }
    @PostMapping("/verify")
    public ResponseEntity<?> verifyCode(
            @RequestBody VerificationRequest verificationRequest
    ) {
        return ResponseEntity.ok(authenticationService.verifyCode(verificationRequest));
    }
    //forgetpwd
    @PutMapping("/forgot-password")
    public ResponseEntity<Void> forgotPassword(@RequestParam String email){
        authenticationService.forgotPassword(email);
        return ResponseEntity.ok().build();
    }
    //@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = {"newPassword"})
    @PutMapping("set-password")
    public ResponseEntity<Void> setPassword(@RequestParam String email,@RequestHeader String newPassword){
        authenticationService.setPassword(email,newPassword);
        return ResponseEntity.ok().build();

    }






}
