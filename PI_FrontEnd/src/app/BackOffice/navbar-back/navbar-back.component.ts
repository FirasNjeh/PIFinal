import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/models';
import { AdminService } from 'src/app/services/services/admin/admin.service';
import { LogoutService } from 'src/app/services/services/logout/logout.service';

@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrls: ['./navbar-back.component.css']
})
export class NavbarBackComponent {
  user1!:Observable<User> ;
  currentUser: User | undefined;

  constructor(private router :Router,
    private logoutService :LogoutService,
  private adminservice: AdminService){}
  ngOnInit(): void {
    this.getCurrentUser();
  }
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
  getCurrentUser(): void {
    this.adminservice.getCurrentUser().subscribe(
      (user: User) => {
        this.currentUser = user;
        console.log('Utilisateur actuel :', this.currentUser);
      },
      (error: any) => {
        console.error('Une erreur est survenue lors de la récupération de l\'utilisateur actuel :', error);
      }
    );
  }

  }

  


