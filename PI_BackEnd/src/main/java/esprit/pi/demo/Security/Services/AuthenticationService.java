package esprit.pi.demo.Security.Services;

import esprit.pi.demo.DTO.Firas.AuthenticationRequest;
import esprit.pi.demo.DTO.Firas.AuthenticationResponse;
import esprit.pi.demo.DTO.Firas.RegisterRequest;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public interface AuthenticationService {
     AuthenticationResponse register(RegisterRequest request) ;
     AuthenticationResponse authenticate(AuthenticationRequest request) ;
     void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}
