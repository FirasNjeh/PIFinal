import { Component, OnInit } from '@angular/core';
import { PackAssurService } from "../../Services/pack-assur.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import * as ApexCharts from 'apexcharts';
import {HttpEventType, HttpResponse} from "@angular/common/http";


@Component({
  selector: 'app-pack-assur-list',
  templateUrl: './pack-assur-list.component.html',
  styleUrls: ['./pack-assur-list.component.css']
})
export class PackAssurListComponent implements OnInit {
  packsAssur!: any[];

  currentPage = 1;
  pageSize = 10;
  totalItems = 0;

  packAssur!: any;
  idToDelete!: number;

  addPackAssurForm!: FormGroup;
  updatePackAssurForm!: FormGroup;

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  messageUploadImage = '';
  idpack!: any;


  newPackAssur: any = {};
  closeResult!: string;

  constructor(private packAssurService: PackAssurService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllPacksAssur();
  }

  // Get all list

  getAllPacksAssur() {
    this.packAssurService.findAllPacksAssur().subscribe(
      (packsAssur: any[]) => {
        this.totalItems = packsAssur.length;
        this.packsAssur = packsAssur.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
        console.log('All PacksAssur fetched successfully!');
      },
      (error) => {
        console.error('Error in fetching AllPacksAssur:', error);
      }
    );
  }


  // Get a pack

  findPackAssurById(id: number) {
    this.packAssurService.findPackAssurById(id).subscribe(
      (packAssur: any) => {
        this.packAssur = packAssur;
        console.log('PackAssur fetched successfully!', packAssur);
      },
      (error) => {
        console.error('Error in fetching PackAssur:', error);
      }
    );
  }

  // Add new pack

  addPackAssur() {
    this.addPackAssurForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      primeMin: ['', Validators.required],
      primeMax: ['', Validators.required],
      packAssurance: ['', Validators.required]
    });
  }

  openAddPackAssurModal(content: any) {
    this.addPackAssur();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  submitAddPackAssurForm() {
    if (this.addPackAssurForm.valid) {
      this.packAssurService.addPackAssur(this.addPackAssurForm.value).subscribe(
        (response) => {
          console.log('PackAssur added successfully!');
          this.addPackAssurForm.reset();
          this.modalService.dismissAll();
          this.getAllPacksAssur();
        },
        (error) => {
          console.error('Error adding PackAssur:', error);
        }
      );
    }
  }

  // Update a pack

  updatePackAssur(packAssur: any) {
    this.updatePackAssurForm = this.formBuilder.group({
      id: [packAssur.id],
      nom: [packAssur.nom, Validators.required],
      description: [packAssur.description, Validators.required],
      primeMin: [packAssur.primeMin, Validators.required],
      primeMax: [packAssur.primeMax, Validators.required],
      packAssurance: [packAssur.packAssurance, Validators.required]
    });
  }

  openUpdatePackAssurModal(content: any, packAssur: any) {
    this.updatePackAssur(packAssur);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  submitUpdatePackAssurForm() {
    if (this.updatePackAssurForm.valid) {
      this.packAssurService.updatePackAssur(this.updatePackAssurForm.value.id, this.updatePackAssurForm.value).subscribe(
        (response) => {
          console.log('PackAssur updated successfully!');
          this.updatePackAssurForm.reset();
          this.modalService.dismissAll();
          this.getAllPacksAssur();
        },
        (error) => {
          console.error('Error updating PackAssur:', error);
        }
      );
    }
  }

  // Delete a pack

  openDeletePackAssurModal(content: any, id: number) {
    this.idToDelete = id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  deletePackAssurConfirmed() {
    this.packAssurService.deletePackAssur(this.idToDelete).subscribe(
      (response) => {
        console.log('PackAssur deleted successfully!');
        this.modalService.dismissAll();
        this.getAllPacksAssur();
      },
      (error) => {
        console.error('Error in deleting PackAssur:', error);
      }
    );
  }

  // Add Image

  openImagePackAssurModal(content: any, idpack: number) {
    this.idpack = idpack;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.packAssurService.uploadImage(this.currentFile, this.idpack).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.messageUploadImage = 'File uploaded successfully!';
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.messageUploadImage = err.error.message;
            } else {
              this.messageUploadImage = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }

  onOkClick(): void {
    location.reload();
  }

  getListFiles(idpack: number) {
    this.packAssurService.getListFiles(idpack).subscribe(
      (files: any[]) => {
        console.log('Files fetched successfully!', files);
      },
      (error) => {
        console.error('Error in fetching files:', error);
      }
    );
  }


}
