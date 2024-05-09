import { Component, OnInit } from '@angular/core';
import { PackCrFrontService } from '../service/pack-cr-front.service';
import { Observable, catchError, throwError } from 'rxjs';
import { PackCR } from 'src/app/model/PackCR';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router'

@Component({
  selector: 'app-pack-cr-front',
  templateUrl: './pack-cr-front.component.html',
  styleUrls: ['./pack-cr-front.component.css']
})
export class PackCRFrontComponent implements OnInit {
  pack$: Observable<PackCR[]> |undefined; // Change pack to pack$
  pack1!:Observable<PackCR> ;


  errorMessage: Object | undefined;
  
  constructor(private packcrf: PackCrFrontService, private router :Router){}

  ngOnInit(): void {
    this.getPacks(); 
  }

  // la fonction de récupération de tous les packs
  getPacks(): void {
    this.pack$ = this.packcrf.getPacksCR().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  // la fonction a mettre sur le bouton pour passer al l'autre page en fonction de l'id
  redirectToDetails(packcr:PackCR): void{
    const idp:number = packcr.id;
    console.log('l id du pack récupéré est : ' + idp);
    //la redirection vers la page du pack
    this.router.navigate(['/Pack',idp]);
  }

  //get publication par id 
  findPackCRById(id: number): void {
    console.log('ID du pack ' + id);
    this.pack1 = this.packcrf.findPackCRById(id);
    this.pack1.subscribe(data => {
        console.log('Pack Retrieved:', data);
    });}
}
