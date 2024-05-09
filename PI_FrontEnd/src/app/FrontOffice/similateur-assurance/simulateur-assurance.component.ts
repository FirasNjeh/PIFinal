import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AssuranceService} from "../../Services/assurance.service";

@Component({
  selector: 'app-similateur-assurance',
  templateUrl: './simulateur-assurance.component.html',
  styleUrls: ['./simulateur-assurance.component.css']
})
export class SimulateurAssuranceComponent implements OnInit {

  typeAssur: any;

  scolaireAssuranceForm!: FormGroup;
  entrepreneurAssuranceForm!: FormGroup;
  santeAssuranceForm!: FormGroup;
  agricoleAssuranceForm!: FormGroup;

  scolairePrime: any;
  entrepreneurPrime: any;
  santePrime: any;
  agriculturePrime: any;

  constructor(private assuranceService: AssuranceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initScolaireAssuranceForm();
    this.initEntrepreneurAssuranceForm();
    this.initSanteAssuranceForm();
    this.initAgricoleAssuranceForm();
  }

  onTypeAssurChange(typeAssur: any) {
    this.typeAssur = typeAssur;
    if (this.typeAssur === 'AGRICOLE') {
      this.agricoleAssuranceForm.reset();
    } else if (this.typeAssur === 'SANTE') {
      this.santeAssuranceForm.reset();
    } else if (this.typeAssur === 'ENTREPRENEUR') {
      this.entrepreneurAssuranceForm.reset();
    } else if (this.typeAssur === 'SCOLAIRE') {
      this.scolaireAssuranceForm.reset();
    }
  }

  initScolaireAssuranceForm() {
    this.scolaireAssuranceForm = this.formBuilder.group({
      capitalescolaire_assure: ['', Validators.required]
    });
  }

  initEntrepreneurAssuranceForm() {
    this.entrepreneurAssuranceForm = this.formBuilder.group({
      typeAssuranceEntrep: ['', Validators.required],
      bienAssure: ['', Validators.required],
    });
  }

  initSanteAssuranceForm() {
    this.santeAssuranceForm = this.formBuilder.group({
      typeAssuranceSante: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  initAgricoleAssuranceForm() {
    this.agricoleAssuranceForm = this.formBuilder.group({
      capitalAgricole_assure: ['', Validators.required],
      typeAgriculture: ['', Validators.required]
    });
  }

  onScolaireAssuranceSubmit() {
    if (this.scolaireAssuranceForm.valid) {
      const formValue = this.scolaireAssuranceForm.value;
      this.calculScolairePrime(formValue.capitalescolaire_assure);
    }
  }

  onEntrepreneurAssuranceSubmit() {
    if (this.entrepreneurAssuranceForm.valid) {
      const formValue = this.entrepreneurAssuranceForm.value;
      this.calculENTREPRENEURPrime(formValue.typeAssuranceEntrep, formValue.bienAssure);
    }
  }

  onSanteAssuranceSubmit() {
    if (this.santeAssuranceForm.valid) {
      const formValue = this.santeAssuranceForm.value;
      this.calculSANTEPrime(formValue.typeAssuranceSante, formValue.age, formValue.gender);
    }
  }

  onAgricoleAssuranceSubmit() {
    if (this.agricoleAssuranceForm.valid) {
      const formValue = this.agricoleAssuranceForm.value;
      this.calculAgriculturePrime(formValue.capitalAgricole_assure, formValue.typeAgriculture);
    }
  }

  calculScolairePrime(capitalescolaire_assure: any) {
    this.assuranceService.calculScolairePrime(capitalescolaire_assure)
      .subscribe((data: any) => {
        this.scolairePrime = data;
      });
  }

  calculENTREPRENEURPrime(typeAssuranceEntrep: any, bienAssure: any) {
    this.assuranceService.calculENTREPRENEURPrime(typeAssuranceEntrep, bienAssure)
      .subscribe((data: any) => {
        this.entrepreneurPrime = data;
      });
  }

  calculSANTEPrime(typeAssuranceSante: any, age: any, gender: any) {
    this.assuranceService.calculSANTEPrime(typeAssuranceSante, age, gender)
      .subscribe((data: any) => {
        this.santePrime = data;
      });
  }

  calculAgriculturePrime(capitalAgricole_assure: any, typeAgriculture: any) {
    this.assuranceService.calculAgriculturePrime(capitalAgricole_assure, typeAgriculture)
      .subscribe((data: any) => {
        this.agriculturePrime = data;
      });
  }


}
