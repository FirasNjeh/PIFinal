import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/services/services/logout/logout.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-header-front',
  templateUrl: './header-front.component.html',
  styleUrls: ['./header-front.component.css']
})
export class HeaderFrontComponent {

  constructor(
    private router :Router,
    private logoutService :LogoutService,
    private tokenService :TokenService
  ){}
  logout() {
    const token = localStorage.getItem('access_token');

    if (token) {
      this.logoutService.logout(token).subscribe({
        next: (res: any) => {
          // Gérer la déconnexion réussie ici
          console.log('Déconnexion réussie :', res);
          this.router.navigate(['login']);
          localStorage.clear();
        },
        error: (error: any) => {
          // Gérer les erreurs de déconnexion ici
          console.error('Erreur lors de la déconnexion :', error);
        }
      });
    } else {
      console.error('Aucun token trouvé dans le local storage.');
    }
  }
}


