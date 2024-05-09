import { Component } from '@angular/core';
import { CreditFrontService } from '../service/credit-front.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  convertTo!: string;
  quantity!: number;
  resultats: any;

  constructor(private Service:CreditFrontService) { }


  currency(): void {
    this.Service.currency(this.quantity,this.convertTo)
      .subscribe(data => {
        this.resultats = data;
      });
  }

}
