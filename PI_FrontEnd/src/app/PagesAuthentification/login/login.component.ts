import { Component, ViewChild } from '@angular/core';
import { AuthenticationRequest, AuthenticationResponse, RegisterRequest } from 'src/app/services/models';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationControllerService } from 'src/app/services/services';
import { TokenService } from 'src/app/services/token/token.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthenticationService } from 'src/app/services/services/Authenticate/authentication.service';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from 'src/app/services/models/jwt.interface';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('captchaElem') captchaElem: any;
  siteKey :string;
  captchaErrorMsg: string = '';
  
  authRequest: AuthenticationRequest ={email: "", mdp :""};
  registerRequest: RegisterRequest={nom :'',prenom:'',cin:NaN,dateNaissance:'',numtel:NaN,email:'',adresse:"",mdp:'',profession:'',genre: 'HOMME',salaire:NaN}
  errorMsgLogin :Array<string>=[];
  constructor(
    private router :Router,
    private authService:AuthenticationControllerService,
    private tokenService : TokenService,
    private AuthService:AuthenticationService,
    

  ){
    this.siteKey="6Lfl7dUpAAAAALkDLtcMk1b7FSH08CBzuQZdlTdK";
  }
  onRegisterClick() {
    const container = document.getElementById('container');
    if (container) {
      container.classList.add("active");
    }
  }
  onLoginClick() {
    const container = document.getElementById('container');
    if (container) {
      container.classList.remove("active");
    }
  }
  login() {
    this.errorMsgLogin = [];
  
    // Vérifier si le captcha a été validé
    if (this.captchaElem && this.captchaElem.getResponse()) {
      this.AuthService.authenticate(this.authRequest).subscribe({
        next: (res: any) => {
          this.tokenService.access_token = res.access_token as string;
          this.tokenService.refresh_token = res.refresh_token as string;
          const decodedToken = jwtDecode<DecodedToken>(res.access_token);
          console.log(decodedToken);
          if (decodedToken.role === 'ADMIN') {
            this.router.navigate(['admin']);
          } else if (decodedToken.role === 'CLIENT') {
            this.router.navigate(['home']);
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      
      console.log('Veuillez valider le captcha');
      this.captchaErrorMsg = 'Veuillez valider le captcha';
    }
  }
  
  Register(){
    this.router.navigate(['register']);
  }
  

}
document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('container');
  const registerBtn = document.getElementById('register');
  const loginBtn = document.getElementById('login');

  if (registerBtn && loginBtn && container) {
    registerBtn.addEventListener('click', () => {
      container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
      container.classList.remove("active");
    });
  }
});

