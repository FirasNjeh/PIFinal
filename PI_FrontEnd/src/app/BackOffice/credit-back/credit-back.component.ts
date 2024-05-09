import { Component } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Credit } from 'src/app/model/Credit';
import { CreditBackService } from '../service/credit-back.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-credit-back',
  templateUrl: './credit-back.component.html',
  styleUrls: ['./credit-back.component.css']
})
export class CreditBackComponent {

  credit$: Observable<Credit[]> |undefined; 
  credits: Credit[] = [];
  selectedCredit!: any
  searchText!:number;



  errorMessage: Object | undefined;
  
  constructor(private creditService: CreditBackService,private router :Router, private modalService: NgbModal){}

  ngOnInit(): void {
    this.getCredits(); 
  }

  getCredits(): void {
    this.credit$ = this.creditService.afficherCredits().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  redirectToDetails(credit:Credit): void{
    const idc:number = credit.id;
    console.log('l id du credit récupéré est : ' + idc);
    //la redirection vers la page du credit
    this.router.navigate(['Creditc',idc]);
  }

  deleteCredit(id:number): void {
    // Appel du service pour supprimer le credit avec l'identifiant spécifié
      this.creditService.delete(id).subscribe(() : void => {
        window.location.reload();
      
      
      });    

    }

    openDetailsModal(credit: any, content: any) {
      this.modalService.open(content, { centered: true }).result.then((result) => {
      }, (reason) => {
      });
      this.selectedCredit = credit;
    }

    

    rechercher(searchText: number): void {
      console.log('Search text:', searchText);

      if (this.searchText) {
        this.creditService.FindByMontant(searchText).subscribe(
          data => {
            if (data.length > 0) {
              this.credits = data;
              console.log('yekhdem:', data);

            } else {
              this.errorMessage = "Aucun credit avec ce montant.";
            }
          },
          error => {
            console.error('Une erreur s\'est produite lors de la recherche : ', error);
            this.errorMessage = "Une erreur s'est produite lors de la recherche.";
          }
        );
      } else {
        // Si la barre de recherche est vide, effacer la liste des utilisateurs et le message d'erreur
        this.credits = [];
        this.errorMessage = "test";
      }
    }

   
   
    
  


}
