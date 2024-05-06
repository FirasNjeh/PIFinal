import { Component } from '@angular/core';
import { CreditBackService } from 'src/app/BackOffice/service/credit-back.service';
import { CreditFrontService } from '../service/credit-front.service';

@Component({
  selector: 'app-simulateur-credit',
  templateUrl: './simulateur-credit.component.html',
  styleUrls: ['./simulateur-credit.component.css']
})
export class SimulateurCreditComponent {

  montantCredit!: number;
  nbMois!: number;
  resultats: any;

  constructor(private Service:CreditFrontService) { }


  simulerCredit(): void {
    this.Service.simulateCredit(this.nbMois,this.montantCredit)
      .subscribe(data => {
        this.resultats = data;
      });
  }
}
