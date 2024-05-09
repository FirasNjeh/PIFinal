import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/services/Authenticate/authentication.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
  successMessage: string='';
  newPassword: string = '';
  password: FormControl = new FormControl('');
  email: string = '';
  constructor(private authService: AuthenticationService,  private router:Router,private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.email = params['email'];
      console.log(this.email); // This will log the email value to the console
    });
  }
  setPassword(): void {
    if (!this.newPassword) {
      console.error('Veuillez saisir une adresse e-mail et un nouveau mot de passe');
      return;
    }

    this.authService.resetPassword(this.email, this.newPassword).subscribe(
      response => {
        this.successMessage = 'Le mot de passe a été réinitialisé avec succès. Veuillez vérifier votre boîte de réception pour le lien de réinitialisation.';
        console.log('Mot de passe réinitialisé avec succès : ', response);
        // Ajoutez ici le code pour gérer la réponse de manière appropriée
      },
      error => {
        console.error('Une erreur s\'est produite lors de l\'appel de la méthode setPassword : ', error);
        // Ajoutez ici le code pour gérer les erreurs de manière appropriée
      }
    );
  }
  resetPass(event: Event) {
    event.preventDefault();
    let passwordtosend = this.password.value;
    console.log("pass: "+passwordtosend);
    this.authService.resetPassword(this.email!,passwordtosend).subscribe( (a) => console.log(a));
    this.successMessage="Mot de passe modifié avec succées";
    //this.router.navigate(['/login'] )

  }

}
