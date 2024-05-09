import { Component } from '@angular/core';
import {PackAssurService} from "../../Services/pack-assur.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-pack-assur',
  templateUrl: './pack-assur.component.html',
  styleUrls: ['./pack-assur.component.css']
})
export class PackAssurComponent {
  packsAssur!: any[];
  selectedPack: any;

  currentPage = 1;
  pageSize = 10;
  totalItems = 0;

  constructor(private packAssurService: PackAssurService, private modalService: NgbModal) { }
  ngOnInit(): void {
    this.getAllPacksAssur();
  }

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

  openPackAssurDetailsModal(content: any, packAssur: any) {
    this.selectedPack = packAssur;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }


}
