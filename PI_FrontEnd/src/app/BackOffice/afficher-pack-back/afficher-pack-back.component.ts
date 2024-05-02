import { Component } from '@angular/core';
import { PackCR } from 'src/app/model/PackCR';
import { PackCrBackService } from '../service/pack-cr-back.service';
import { Observable, catchError, throwError } from 'rxjs';
import { PackCredit } from 'src/app/model/Credit';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-afficher-pack-back',
  templateUrl: './afficher-pack-back.component.html',
  styleUrls: ['./afficher-pack-back.component.css']
})
export class AfficherPackBackComponent {
  pack$: Observable<PackCR[]> |undefined; // Change pack to pack$

  errorMessage: Object | undefined;
  updatePackForm!: FormGroup;

  
  constructor(private packcrf: PackCrBackService, private modalService: NgbModal, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.getPacks(); // Call getPacks() in ngOnInit
  }

  getPacks(): void {
    this.pack$ = this.packcrf.afficherPackCR().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }
  deletePost(id:number): void {
    // Appel du service pour supprimer le credit avec l'identifiant spécifié
      this.packcrf.delete(id).subscribe(() : void => {
        window.location.reload();
      
      
      });    

    }

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
    this.packcrf.addPackCR(newpack).subscribe(
      (newpackid:number)=>{console.log('pack ajouté avec succés',newpackid);}
    )
  }
  openAddPackModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  updatePack(pack: any) {
    this.updatePackForm = this.formBuilder.group({
      id: [pack.id],
      nom: [pack.nom, Validators.required],
      description: [pack.description, Validators.required],
      montantMin: [pack.montantMin, Validators.required], // Ensure these are added
      montantMax: [pack.montantMax, Validators.required], // Ensure these are added
      selectedpackCredit: [pack.selectedpackCredit, Validators.required]
    });
    
  }

  openUpdatePackModal(content: any, pack: any) {
    this.updatePack(pack);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  submitUpdatePackForm() {
    if (this.updatePackForm.valid) {
        this.packcrf.updatePack(this.updatePackForm.value.id, this.updatePackForm.value).subscribe(
            (response) => {
                console.log('Pack updated successfully!', response);
                this.updatePackForm.reset();
                this.modalService.dismissAll();
                this.getPacks();
            },
            (error) => {
                console.error('Error updating Pack:', error);
            }
        );
    }
}



}
