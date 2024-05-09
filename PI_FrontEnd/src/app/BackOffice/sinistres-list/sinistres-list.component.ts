import { Component, OnInit } from '@angular/core';
import {SinistreService} from "../../Services/sinistre.service";

@Component({
  selector: 'app-sinistres-list',
  templateUrl: './sinistres-list.component.html',
  styleUrls: ['./sinistres-list.component.css'],
})
export class SinistresListComponent implements OnInit {
  sinistres: any[] = [];
  selectedEtatSinistre: string = '';

  currentPage = 1;
  pageSize = 10;
  totalItems = 0;

  constructor(private sinistreService: SinistreService) {}

  ngOnInit(): void {
    this.getAllSinistres();
  }

  getAllSinistres() {
    this.sinistreService.findAllSinistres().subscribe(
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

  filterSinistres(sinistres: any[]): any[] {
    if (!this.selectedEtatSinistre) {
     return this.sinistres;
    }
    return sinistres.filter((sinistre) => sinistre.etatSinistre === this.selectedEtatSinistre);
  }

  acceptSinistre(idsin: number) {
    if (window.confirm('Are you sure you want to accept this sinistre?')) {
      this.sinistreService.acceptSinistre(idsin).subscribe(
        (response) => {
          console.log('Sinistre accepted successfully:', response);
          this.getAllSinistres();
        },
        (error) => {
          console.error('Error accepting sinistre:', error);
        }
      );
    }
  }

  refuseSinistre(idsin: number) {
    if (window.confirm('Are you sure you want to refuse this sinistre?')) {
      this.sinistreService.refuseSinistre(idsin).subscribe(
        (response) => {
          console.log('Sinistre refused successfully:', response);
          this.getAllSinistres();
        },
        (error) => {
          console.error('Error refusing sinistre:', error);
        }
      );
    }
  }

}
