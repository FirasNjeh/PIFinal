import { Component } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { MonthlyPayment } from 'src/app/model/MonthlyPayment';
import { MpFrontService } from '../service/mp-front.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-monthly-payment-front',
  templateUrl: './monthly-payment-front.component.html',
  styleUrls: ['./monthly-payment-front.component.css']
})
export class MonthlyPaymentFrontComponent {
  mp$: Observable<Array<MonthlyPayment>> |undefined; 

  errorMessage: Object | undefined;
  
  constructor(private Service: MpFrontService,private route: ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      const idc: number = params['id'];
      console.log('ID du Credit pour mp récupéré est: ', idc);
      if(idc){
        this.getMps(idc);
      }
    })
  }

  getMps(id:number): void {
    this.mp$ = this.Service.afficherMp(id).pipe(

      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
      
      
    );
    this.mp$.subscribe(data => {
      console.log('mp Retrieved:', data);
  });
  }

}
