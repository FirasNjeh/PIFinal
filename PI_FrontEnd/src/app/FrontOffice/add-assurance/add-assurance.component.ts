import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { AssuranceService } from 'src/app/Services/assurance.service';
import { PackAssurService } from 'src/app/Services/pack-assur.service';

@Component({
  selector: 'app-add-assurance',
  templateUrl: './add-assurance.component.html',
  styleUrls: ['./add-assurance.component.css']
})
export class AddAssuranceComponent implements OnInit {
  idPack!: any;
  packAssur:any;
  typeAssur!: any;
  idUser!: any;

  scolaireAssuranceForm!: FormGroup;
  entrepreneurAssuranceForm!: FormGroup;
  santeAssuranceForm!: FormGroup;
  agricoleAssuranceForm!: FormGroup;

  constructor(private assuranceService: AssuranceService,
              private packAssurService: PackAssurService,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.idUser = 1; // this.storageService.getUser().id;
    this.idPack = this.activatedRoute.snapshot.paramMap.get('idPack');
    this.findPackAssurById(this.idPack);
  }

  initScolaireAssuranceForm() {
    const currentDate = new Date();

    this.scolaireAssuranceForm = this.formBuilder.group({
      date_payement: [currentDate, Validators.nullValidator],
      montant_prime: ['', Validators.required],
      duree_contrat: ['', Validators.required],
      remboursement_en_cas_de_sinsitre: ['', Validators.required],
      franchise: ['', Validators.required],
      nom_enfant: ['', Validators.required],
      prenom_enfant: ['', Validators.required],
      capitalescolaire_assuré: ['', Validators.required],
      montant_couverture: ['', Validators.required]
    });
  }

  initEntrepreneurAssuranceForm() {
    const currentDate = new Date();

    this.entrepreneurAssuranceForm = this.formBuilder.group({
      date_payement: [currentDate, Validators.nullValidator],
      montant_prime: ['', Validators.required],
      duree_contrat: ['', Validators.required],
      remboursement_en_cas_de_sinsitre: ['', Validators.required],
      franchise: ['', Validators.required],
      nom_entreprise: ['', Validators.required],
      adresse_entreprise: ['', Validators.required],
      activité_entreprise: ['', Validators.required],
      typeAssuranceEntrep: ['', Validators.required],
      bien_assuré: ['', Validators.required],
      historique_de_sinistralite: ['', Validators.required],
      responsbilité_civile: ['', Validators.required]
    });
  }

  initSanteAssuranceForm() {
    const currentDate = new Date();

    this.santeAssuranceForm = this.formBuilder.group({
      date_payement: [currentDate, Validators.nullValidator],
      montant_prime: ['', Validators.required],
      duree_contrat: ['', Validators.required],
      remboursement_en_cas_de_sinsitre: ['', Validators.required],
      franchise: ['', Validators.required],
      typeAssuranceSante: ['', Validators.required],
      niveauDeCouverture: ['', Validators.required],
      condition_medicale: ['', Validators.required]
    });
  }

  initAgricoleAssuranceForm() {
    const currentDate = new Date();

    this.agricoleAssuranceForm = this.formBuilder.group({
      date_payement: [currentDate, Validators.nullValidator],
      montant_prime: ['', Validators.required],
      duree_contrat: ['', Validators.required],
      remboursement_en_cas_de_sinsitre: ['', Validators.required],
      franchise: ['', Validators.required],
      nom_exploitation_agricole: ['', Validators.required],
      lieu_de_lexploitation: ['', Validators.required],
      motant_de_couverture_souhaite: ['', Validators.required],
      capitaleagricole_assuré: ['', Validators.required],
      typeagriculture: ['', Validators.required],
      typedecouverture: ['', Validators.required]
    });
  }


  findPackAssurById(id: number) {
    this.packAssurService.findPackAssurById(id).subscribe(
      (packAssur: any) => {
        this.packAssur = packAssur;
        this.typeAssur = this.packAssur.packAssurance;
        console.log('PackAssur fetched successfully!');
        console.log('Type assur:', this.typeAssur);

        if (this.typeAssur === 'AGRICOLE') {
          this.initAgricoleAssuranceForm();
        } else if (this.typeAssur === 'SANTE') {
          this.initSanteAssuranceForm();
        } else if (this.typeAssur === 'ENTREPRENEUR') {
          this.initEntrepreneurAssuranceForm();
        } else if (this.typeAssur === 'SCOLAIRE') {
          this.initScolaireAssuranceForm();
        }
      },
      (error) => {
        console.error('Error in fetching PackAssur:', error);
      }
    );
  }

  createScolaireAssurance() {
    this.assuranceService.createScolaireAssurance(this.idUser, this.idPack, this.scolaireAssuranceForm.value).subscribe(
      response => {
        console.log('Scolaire assurance successfully!',response);
        this.router.navigate(['/assurances']);
      },
      error => {
        console.log(error);
        console.log('Error creating assurance!',error);
      }
    );
  }

  createEntrepreneurAssurance() {
    this.assuranceService.createEntrepreneurAssurance(this.idUser, this.idPack, this.entrepreneurAssuranceForm.value).subscribe(
      response => {
        console.log('Entrepreneur assurance successfully!',response);
        this.router.navigate(['/assurances']);
      },
      error => {
        console.log(error);
        console.log('Error creating assurance!',error);
      }
    );
  }

  createSanteAssurance() {
    this.assuranceService.createSanteAssurance(this.idUser, this.idPack, this.santeAssuranceForm.value).subscribe(
      response => {
        console.log('Sante assurance successfully!',response);
        this.router.navigate(['/assurances']);
      },
      error => {
        console.log('Error creating assurance!',error);
      }
    );
  }

  createAgricoleAssurance() {
    this.assuranceService.createAgricoleAssurance(this.idUser, this.idPack, this.agricoleAssuranceForm.value).subscribe(
      response => {
        console.log('Agricole assurance successfully!',response);
        this.router.navigate(['/assurances']);
      },
      error => {
        console.log(error);
        console.log('Error creating assurance!',error);
      }
    );
  }

}
