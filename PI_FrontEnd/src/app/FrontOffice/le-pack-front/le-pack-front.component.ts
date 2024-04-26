import { Component } from '@angular/core';
import { PackCR } from 'src/app/model/PackCR';
import { Observable, catchError, throwError } from 'rxjs';
import { PackCrFrontService } from '../service/pack-cr-front.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router} from '@angular/router'


import { PackCredit } from 'src/app/model/Credit';


@Component({
  selector: 'app-le-pack-front',
  templateUrl: './le-pack-front.component.html',
  styleUrls: ['./le-pack-front.component.css']
})

export class LePackFrontComponent {
  pack!: Observable<PackCR[]> | undefined;
  pack1!:Observable<PackCR> ;
  errorMessage: Object | undefined;
  constructor(private packcrf: PackCrFrontService,private route: ActivatedRoute,private router:Router){}

 
  //La fonction de récupération de l'id du pack selectionné
   ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      const idp: number = params['id'];
      console.log('ID du pack récupéré est: ', idp);
      if(idp){
        this.findPackCRById(idp);
      }
    })
     }
    ;

  //get publication par id 
  findPackCRById(id: number): void {
    console.log('ID de la pub ' + id);
    this.pack1 = this.packcrf.findPackCRById(id);
    this.pack1.subscribe(data => {
        console.log('Pack Retrieved:', data);
    });}

  // la fonction a mettre sur le bouton pour passer al l'autre page en fonction de l'id
  recuperationid(packcr:PackCR): void{
    const idp:number = packcr.id;
    console.log('l id du pack récupéré est : ' + idp);
    //la redirection vers la page du pack
    this.router.navigate(['/FormulaireCredit',idp]);
  }








}

