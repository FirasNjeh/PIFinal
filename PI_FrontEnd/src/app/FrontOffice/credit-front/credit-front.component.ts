import { Component } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Credit } from 'src/app/model/Credit';
import { CreditFrontService } from '../service/credit-front.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-credit-front',
  templateUrl: './credit-front.component.html',
  styleUrls: ['./credit-front.component.css']
})
export class CreditFrontComponent {
  credit$: Observable<Credit[]> |undefined; 
  credit1!:Observable<Credit> ;
  id!:number;
  nbrCredits!: number;
  nbrCreditsClo!:number;



  errorMessage: Object | undefined;
  
  constructor(private creditservice: CreditFrontService, private router :Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      const idu: number = params['id'];
      console.log('ID du user récupéré est: ', idu);
      if(idu){
        this.getCredits(idu);
        this.getNbrCredit(idu);
        this.getNbrCloCredit(idu);
      }
    })
     }
    ;

  // la fonction de récupération de tous les Crédits de l'utilisateur
  getCredits(id:number): void {

    this.credit$ = this.creditservice.getCreditUser(id).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  // la fonction a mettre sur le bouton pour passer al l'autre page en fonction de l'id
  redirectToDetails(credit:Credit): void{
    const idc:number = credit.id;
    console.log('l id du credit récupéré est : ' + idc);
    //la redirection vers la page du Credit
    this.router.navigate(['/Credit',idc]);
  }

  //get Credit par id 
  findCreditById(id: number): void {
    console.log('ID du credit ' + id);
    this.credit1 = this.creditservice.findCreditById(id);
    this.credit1.subscribe(data => {
        console.log('Credit Retrieved:', data);
    });}

  //la fonction de recuperation du nombre de credit pris par utilisateur 
  getNbrCredit(id: number): void {
    this.creditservice.getNbrCredit(id).subscribe(nbrCredits => this.nbrCredits = nbrCredits);
    console.log('le user : ' + id);

    console.log('le nbr credit récupéré est : ' + this.nbrCredits);

  }

   //la fonction de recuperation du nombre de credit cloturé par utilisateur 
   getNbrCloCredit(id: number): void {
    this.creditservice.getNbrCreditClo(id).subscribe(nbrCreditsClo => this.nbrCreditsClo = nbrCreditsClo);
    console.log('le user : ' + id);

    console.log('le nbr credit clo est : ' + this.nbrCreditsClo);

  }
  
}
