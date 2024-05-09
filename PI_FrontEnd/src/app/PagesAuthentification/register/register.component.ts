import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationResponse, RegisterRequest } from 'src/app/services/models';
import { VerificationRequest } from 'src/app/services/models/verification-request';
import { RegisterService } from 'src/app/services/services/Register/register.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerRequest :RegisterRequest={nom :'',prenom:'',email :'',mdp:'',cin:NaN,dateNaissance:'',numtel:NaN,profession:'',genre:'HOMME',salaire:NaN,adresse:'',role:'CLIENT'};
  authResponse :AuthenticationResponse={};
  errorMsg :Array<string>=[];
  message :string="";
  otpCode:string="";
  
  constructor(
    private router :Router,
    private registerService:RegisterService,
    private tokenService:TokenService,
    private formBuilder: FormBuilder

  ) {
    
  }
  Register(){
    this.errorMsg=[];
    this.message="";
    this.registerService.Register(
      this.registerRequest
    ).subscribe({
      next:(res : any)=>{
        if(res){
          this.authResponse=res;
        //this.tokenService.access_token=res.access_token as string;
        //this.tokenService.refresh_token=res.refresh_token as string;
        // this.router.navigate(['home']);
        }
        else{
          this.message="Compte crée avec succées";
          setTimeout(()=>{
            this.router.navigate(['login']);
          }),3000
        }
      
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  
  login(){
    this.router.navigate(['login']);
  }
  verifyTfa() {
    this.message = '';
    const verifyRequest: VerificationRequest = {
      email: this.registerRequest.email,
      code: this.otpCode
    };
    this.registerService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          this.message = 'Compte crée avec succées';
          setTimeout(() => {
            localStorage.setItem('access_token', response.access_token as string);
            localStorage.setItem('refresh_token', response.refresh_token as string);
            this.router.navigate(['home']);
          }, 3000);
        }
      });
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);
  validateDateOfBirth(control: FormControl) {
    // Vérifier si l'utilisateur a au moins 18 ans
    const dateOfBirth = new Date(control.value);
    const ageDiffMs = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(ageDiffMs); 
    const age = Math.abs(ageDate.getUTCFullYear() - 1970); 
    return age >= 18 ? null : { underage: true };
  }
  dateNaissanceFormControl = new FormControl('', [
    Validators.required,
    this.validateDateOfBirth 
  ]);
  
  isFormValid() {
    return this.emailFormControl.valid && this.passwordFormControl.valid &&this.dateNaissanceFormControl.valid;
  }
  
  

}
