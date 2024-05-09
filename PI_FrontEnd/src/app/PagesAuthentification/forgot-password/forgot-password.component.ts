import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/services/Authenticate/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  successMessage: string='';
  constructor(private authService: AuthenticationService) { }
  forgotPassword(): void {
    this.authService.forgotPassword(this.email).subscribe(
      response => {
        console.log('Nouveau mot de passe défini avec succès : ', response);
        this.successMessage = 'Un email de réinitialisation de mot de passe a été envoyé à votre adresse. Veuillez vérifier votre boîte mail.';
        // Ajoutez ici le code pour gérer la réponse de manière appropriée
      },
      error => {
        console.error('Une erreur s\'est produite lors de l\'appel de la méthode forgotPassword : ', error);
        // Ajoutez ici le code pour gérer les erreurs de manière appropriée
      }
    );
  }
  

}
