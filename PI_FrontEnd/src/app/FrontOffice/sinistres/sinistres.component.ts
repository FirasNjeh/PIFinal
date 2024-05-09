import {Component, OnInit} from '@angular/core';
import {SinistreService} from "../../Services/sinistre.service";
import {ActivatedRoute} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-sinistres',
  templateUrl: './sinistres.component.html',
  styleUrls: ['./sinistres.component.css']
})
export class SinistresComponent implements OnInit{
  idAssurance!: any;
  sinistres: any[] = [];
  selectedSinistre: any;

  currentPage = 1;
  pageSize = 10;
  totalItems = 0;

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  messageUploadImage = '';
  selectedSinistreId:any;


  constructor(private sinistreService: SinistreService, private activatedRoute: ActivatedRoute, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.idAssurance = this.activatedRoute.snapshot.paramMap.get('idAssurance');
    this.getListSinistresByAssurance(this.idAssurance);
  }

  getListSinistresByAssurance(idAssurance: any) {
    this.sinistreService.getListSinistresByAssurance(idAssurance).subscribe(
      (sinistres) => {
        this.totalItems = sinistres.length;
        this.sinistres = sinistres.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
        console.log('All sinistres fetched successfully:');
      },
      (error) => {
        console.error('Error fetching all sinistres:', error);
      }
    );
  }

  openSinistreDetailsModal(content: any, sinistre: any) {
    this.selectedSinistre = sinistre;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  openImageSinistreModal(content: any, sinistreId: any) {
    this.selectedSinistreId = sinistreId;
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
        this.sinistreService.uploadImage(this.currentFile, this.selectedSinistreId).subscribe({
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
}
