import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/services/models';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile-front',
  templateUrl: './profile-front.component.html',
  styleUrls: ['./profile-front.component.css']
})
export class ProfileFrontComponent {

  currentUser: User | undefined;

  constructor(private userService: UserService, private router :Router ){}
  ngOnInit(): void {
    this.getCurrentUser();
  }
  getCurrentUser(): void {
    this.userService.getCurrentUser().subscribe(
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
