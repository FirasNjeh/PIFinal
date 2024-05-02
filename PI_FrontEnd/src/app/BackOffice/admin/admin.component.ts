import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { TransactionCredit } from 'src/app/model/TransactionCredit';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  nbr!: number;
  total!:number;
  clo!:number;
  act$:Observable<TransactionCredit[]> |undefined;
  errorMessage: any;
  @ViewChild('activityCard') activityCard!: ElementRef;

  constructor(private service: AdminService, private router :Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getTotal();
    this.getNbrC();
    this.getClo();
    this.getAct();
  };

  getTotal(): void {
    this.service.getTotal().subscribe(nbr => this.nbr = nbr);

    console.log('le montant  est : ' + this.nbr);

  }

  getNbrC(): void {
    this.service.getNbrC().subscribe(total => this.total = total);

    console.log('le nbr credit est : ' + this.total);

  }

  getClo(): void {
    this.service.getClo().subscribe(clo => this.clo = clo);

    console.log('le nbr credit clo est : ' + this.clo);

  }

  getAct(): void {
    this.act$ = this.service.getAct().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }
  ngAfterViewInit(): void {
    this.act$ = this.service.getAct();
    this.act$.pipe(
      map(acts => {
        if (acts) {
          const cardHeight = Math.min(acts.length, 10) * 2.22; // Hauteur approximative d'une ligne multipliée par le nombre maximum de lignes souhaité (7)
          this.activityCard.nativeElement.style.maxHeight = `${cardHeight}rem`;
        }
      })
    ).subscribe();
  }

  


}
