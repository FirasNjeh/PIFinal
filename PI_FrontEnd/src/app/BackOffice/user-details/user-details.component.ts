import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/models';
import { AdminService } from 'src/app/services/services/admin/admin.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user!: Observable<User[]> | undefined;
  user1!:Observable<User> ;
  errorMessage: Object | undefined;
  constructor(private adminservice: AdminService,private route: ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      const idu: number = params['id'];
      console.log('ID du user récupéré est: ', idu);
      if(idu){
        this.getUserById(idu);
      }
    })
     }
    ;
    getUserById(id: number): void {
      console.log('ID de la pub ' + id);
      this.user1 = this.adminservice.getUserById(id);
      this.user1.subscribe(data => {
          console.log('User Retrieved:', data);
      });}

}
