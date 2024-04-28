import { Component } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Credit } from 'src/app/model/Credit';
import { CreditBackService } from '../service/credit-back.service';

@Component({
  selector: 'app-credit-back',
  templateUrl: './credit-back.component.html',
  styleUrls: ['./credit-back.component.css']
})
export class CreditBackComponent {

  credit$: Observable<Credit[]> |undefined; // Change pack to pack$

  errorMessage: Object | undefined;
  
  constructor(private creditService: CreditBackService){}

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


}
