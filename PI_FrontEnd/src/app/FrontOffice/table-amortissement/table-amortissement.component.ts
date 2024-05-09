import { Component } from '@angular/core';
import { CreditFrontService } from '../service/credit-front.service';
import { ActivatedRoute, Router,Params } from '@angular/router';

@Component({
  selector: 'app-table-amortissement',
  templateUrl: './table-amortissement.component.html',
  styleUrls: ['./table-amortissement.component.css']
})
export class TableAmortissementComponent {
  list!:number[][];

  constructor(private creditservice:CreditFrontService,private route:Router,private active:ActivatedRoute) { }

  idc!: number ;
  list$: number[] = [];


  ngOnInit(): void {

    this.active.params.subscribe((params: Params) => {
      this.idc = params['id']; // Stockez l'ID du pack dans la variable de classe
      console.log('ID du pack récupéré est: ', this.idc);
      if (this.idc) {
        this.creditservice.Calcul_tableau_amo(this.idc).subscribe(
          data => {
            this.list = data; // Assurez-vous que votre API renvoie un tableau de données correspondant à la structure de 'list'
          },
          error => {
            console.log('Une erreur s\'est produite lors de la récupération des données : ', error);
          }
        );


      }
    });
    


    
  }
  Calcul1(id:any){
    this.creditservice.Calcul_tableau_amo(id).subscribe((res=>{console.log(res);
      this.list=res}));
  }  

}
