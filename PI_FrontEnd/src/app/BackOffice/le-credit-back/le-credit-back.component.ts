import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from 'src/app/model/Credit';
import { CreditBackService } from '../service/credit-back.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-le-credit-back',
  templateUrl: './le-credit-back.component.html',
  styleUrls: ['./le-credit-back.component.css']
})
export class LeCreditBackComponent {
  // credit!: Observable<Credit[]> | undefined;
  // credit1!:Observable<Credit> ;
  // errorMessage: Object | undefined;
  // constructor(private service: CreditBackService,private route: ActivatedRoute,private router:Router){}

 
  // //La fonction de récupération de l'id du credit selectionné
  //  ngOnInit(): void {
  //   this.route.params.subscribe((params:Params) => {
  //     const idc: number = params['id'];
  //     console.log('ID du credit récupéré est: ', idc);
  //     if(idc){
  //       this.findCreditById(idc);
  //     }
  //   })
  //    }
  //   ;

  // //get credit par id 
  // findCreditById(id: number): void {
  //   console.log('ID du credit ' + id);
  //   this.credit1 = this.service.findCreditById(id);
  //   this.credit1.subscribe(data => {
  //       console.log('Credit Retrieved:', data);
  //   });}

}
