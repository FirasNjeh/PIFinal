import { Component } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Garant } from 'src/app/model/Garant';
import { GarantBackService } from '../service/garant-back.service';

@Component({
  selector: 'app-garant-back',
  templateUrl: './garant-back.component.html',
  styleUrls: ['./garant-back.component.css']
})
export class GarantBackComponent {

  garant$: Observable<Garant[]> |undefined; // Change pack to pack$

  errorMessage: Object | undefined;
  
  constructor(private garantService: GarantBackService){}

  ngOnInit(): void {
    this.getGarants(); 
  }

  getGarants(): void {
    this.garant$ = this.garantService.afficherGarants().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }
  deleteGarant(id:number): void {
    // Appel du service pour supprimer le credit avec l'identifiant spécifié
      this.garantService.delete(id).subscribe(() : void => {
        window.location.reload();
      
      
      });    

    }

}
