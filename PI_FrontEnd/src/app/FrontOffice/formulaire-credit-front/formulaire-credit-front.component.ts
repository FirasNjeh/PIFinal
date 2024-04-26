import { Component } from '@angular/core';
import { PackCR } from 'src/app/model/PackCR';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { PackCrFrontService } from '../service/pack-cr-front.service';
import { PackCredit, RelationGarant } from 'src/app/model/Credit';
import { GarantFrontService } from '../service/garant-front.service';
import { CreditFrontService } from '../service/credit-front.service';

@Component({
  selector: 'app-formulaire-credit-front',
  templateUrl: './formulaire-credit-front.component.html',
  styleUrls: ['./formulaire-credit-front.component.css']
})
export class FormulaireCreditFrontComponent {
  pack1!: Observable<PackCR>;
  idp!: number ;
  newgarantid!:number;

  constructor(
    private packcrf: PackCrFrontService,
    private route: ActivatedRoute,
    private garantService : GarantFrontService,
    private creditService : CreditFrontService

  ) {}

    id!: number;
    montant!:number;
    packCredit!:PackCredit;
    duree!:number;
    selectedgarant!:RelationGarant;

    idg!:number;
    name!:String;
    prenomGarant!:String;
    salaire_garant!:number;
    cin!:number;

    PackCredit:PackCredit[]=[
      PackCredit.AGRICULTURE,PackCredit.ENTREPRENARIAT,PackCredit.ELEVAGE,PackCredit.EDUCATION,PackCredit.URGENCE_FINANCIERE,PackCredit.FORMATION,PackCredit.PROFESSIONNEL
    ]

    RelationGarant:RelationGarant[]=[
      RelationGarant.PARENT,RelationGarant.AMI,RelationGarant.CONJOINT
    ]

    ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
        this.idp = params['id']; // Stockez l'ID du pack dans la variable de classe
        console.log('ID du pack récupéré est: ', this.idp);
        if (this.idp) {
          this.findPackCRById(this.idp);
        }
      });
  }

  findPackCRById(id: number): void {
    console.log('ID du pack ' + id);
    this.pack1 = this.packcrf.findPackCRById(id);
    this.pack1.subscribe(data => {
      console.log('Pack Retrieved:', data);
    });
  }

  


  onAjout():void{
    //pour le credit 
    const newcredit:{
    id: number;
    montant:number;
    //packCredit:PackCredit;
    duree:number;
    realtionGarant:RelationGarant;

    }={
    id:this.id,
    montant:this.montant,
    duree:this.duree,
    //packCredit:this.packCredit,
    realtionGarant:this.selectedgarant

    };

    //pour le garant 
    const newgarant:{
    id: number;
    name:String;
    prenomGarant:String;
    salaire_garant:number;
    cin:number;

    }={
    id:this.idg,
    name:this.name,
    prenomGarant:this.prenomGarant,
    salaire_garant:this.salaire_garant,
    cin:this.cin,


    };

    this.garantService.addGarant(newgarant).subscribe(
      (newgarant: any) => { 
        this.newgarantid = newgarant.id; 
        console.log('garant ajouté avec succès, ID du garant:', this.newgarantid);

        this.creditService.addCredit(newcredit,this.idp,newgarant.id).subscribe(
           (newcreditid:number)=>{console.log('crédit ajouté avec succés',newcreditid);}
          )

      }
    );
    
    

    
    
    
    
  }
}
