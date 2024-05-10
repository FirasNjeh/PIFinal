import { Component } from '@angular/core';
import {SinistreService} from "../../Services/sinistre.service";
import {AssuranceService} from "../../Services/assurance.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-sinistre',
  templateUrl: './add-sinistre.component.html',
  styleUrls: ['./add-sinistre.component.css']
})
export class AddSinistreComponent {
  idAssur!: any;
  idUser!: any;
  sinistreForm!: FormGroup;

  constructor(private sinistreService: SinistreService,
              private assuranceService: AssuranceService,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.idUser = 1; // this.storageService.getUser().id;
    this.idAssur = this.activatedRoute.snapshot.paramMap.get('idAssur');
    this.initForm();
  }

  initForm() {
    this.sinistreForm = this.formBuilder.group({
      estimation_expert: [0, Validators.required],
      remboursement: [0, Validators.required],
      lieu: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.sinistreForm.valid) {
      this.sinistreService.createSinistreWithAssurance(this.idAssur, this.sinistreForm.value).subscribe(
        response => {
          this.router.navigate(['/sinistres', this.idAssur]);
          console.log('Sinistre added successfully!', response);
        },
        error => {
          console.error('Error adding sinistre:', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }

}
