import { Component } from '@angular/core';
import { PackCrBackService } from '../service/pack-cr-back.service';
import { PackCredit } from 'src/app/model/Credit';


@Component({
  selector: 'app-ajout-pack-back',
  templateUrl: './ajout-pack-back.component.html',
  styleUrls: ['./ajout-pack-back.component.css']
})
export class AjoutPackBackComponent {
  constructor(private packService:PackCrBackService){}

  nom!:String;
  description!:String;  
  image!:String;
  nomImage!:String;
  montantMin!:number;
  montantMax!:number;
  selectedpackCredit!:PackCredit;
  
  PackCredit:PackCredit[]=[
    PackCredit.AGRICULTURE,
    PackCredit.ENTREPRENARIAT,
    PackCredit.ELEVAGE,
    PackCredit.EDUCATION,
    PackCredit.URGENCE_FINANCIERE,
    PackCredit.FORMATION,
    PackCredit.PROFESSIONNEL
  ]

  onAjout():void{
    const newpack:{
    nom:String;
    description:String;
    montantMin:number;
    montantMax:number;
    image:String;
    nomImage:String;
    packCredit:PackCredit;

    }={
    
    nom:this.nom,
    description:this.description,
    montantMin:this.montantMin,
    montantMax:this.montantMax,
    image:this.image,
    nomImage:this.nomImage,
    packCredit:this.selectedpackCredit

    };
    this.packService.addPackCR(newpack).subscribe(
      (newpackid:number)=>{console.log('pack ajouté avec succés',newpackid);}
    )
  }

}
