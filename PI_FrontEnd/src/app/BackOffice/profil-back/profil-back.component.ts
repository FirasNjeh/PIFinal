import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/services/models';
import { AdminService } from 'src/app/services/services/admin/admin.service';

@Component({
  selector: 'app-profil-back',
  templateUrl: './profil-back.component.html',
  styleUrls: ['./profil-back.component.css']
})
export class ProfilBackComponent {
  currentUser: User | undefined;
  constructor(private adminService: AdminService, private router :Router ){}
  ngOnInit(): void {
    this.getCurrentUser();
  }
  getCurrentUser(): void {
    this.adminService.getCurrentUser().subscribe(
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
