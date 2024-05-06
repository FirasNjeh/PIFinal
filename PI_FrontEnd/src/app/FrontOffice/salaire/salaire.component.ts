import { Component } from '@angular/core';
import { CreditFrontService } from '../service/credit-front.service';

@Component({
  selector: 'app-salaire',
  templateUrl: './salaire.component.html',
  styleUrls: ['./salaire.component.css']
})
export class SalaireComponent {
  salaire!: number;
  nbMois!: number;
  resultats: any;

  constructor(private Service:CreditFrontService) { }


  Max(): void {
    this.Service.Max(this.salaire, this.nbMois)
      .subscribe(data => {
        this.resultats = data;
      });
  }

}
