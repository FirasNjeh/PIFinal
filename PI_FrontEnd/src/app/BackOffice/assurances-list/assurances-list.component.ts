import {Component, OnInit} from '@angular/core';
import {AssuranceService} from "../../Services/assurance.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-assurances-list',
  templateUrl: './assurances-list.component.html',
  styleUrls: ['./assurances-list.component.css']
})
export class AssurancesListComponent implements OnInit {
  assurances: any[] = [];
  selectedPackAssurance!: any;
  selectedAssurance!: any

  currentPage = 1;
  pageSize = 10;
  totalItems = 0;

  constructor(private assuranceService: AssuranceService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getAllAssurances();
  }

  getAllAssurances() {
    this.assuranceService.findAllAssurances().subscribe(
      (assurances) => {
        this.totalItems = assurances.length;
        this.assurances = assurances.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
        console.log('All assurances fetched successfully:');
      },
      (error) => {
        console.error('Error in fetching all assurances:', error);
      }
    );
  }

  filterAssurances(): any[] {
    if (!this.selectedPackAssurance) {
      return this.assurances;
    }
    return this.assurances.filter(
      (assurance) => assurance.packAssur.packAssurance === this.selectedPackAssurance
    );
  }

  getHeaders(): string[] {
    const commonHeaders = [
      'ID',
      'Date Payement',
      'Montant Prime',
      'Durée Contrat',
      'Remboursement en cas de Sinistre',
      'Franchise'
    ];

    switch (this.selectedPackAssurance) {
      case 'AGRICOLE':
        return [
          ...commonHeaders,
          'Nom Exploitation Agricole',
          'Lieu de l\'Exploitation',
          'Montant de Couverture Souhaité',
          'Capitale Agricole Assuré',
          'Type Agriculture',
          'Type de Couverture'
        ];
      case 'SANTE':
        return [
          ...commonHeaders,
          'Type Assurance Santé',
          'Niveau de Couverture',
          'Condition Médicale'
        ];
      case 'ENTREPRENEUR':
        return [
          ...commonHeaders,
          'Nom Entreprise',
          'Adresse Entreprise',
          'Activité Entreprise',
          'Type Assurance Entreprise',
          'Bien Assuré',
          'Historique de Sinistralité',
          'Responsabilité Civile'
        ];
      case 'SCOLAIRE':
        return [
          ...commonHeaders,
          'Nom Enfant',
          'Prénom Enfant',
          'Capitale Scolaire Assurée',
          'Montant Couverture'
        ];
      default:
        return [
          ...commonHeaders
        ];
    }
  }

  getAssuranceData(assurance: any): any {
    const commonData = {
      id: assurance.id,
      date_payement: assurance.date_payement ,
      montant_prime: assurance.montant_prime,
      duree_contrat: assurance.duree_contrat,
      remboursement_en_cas_de_sinsitre: assurance.remboursement_en_cas_de_sinsitre,
      franchise: assurance.franchise
    };

    switch (this.selectedPackAssurance) {
      case 'AGRICOLE':
        return {
          ...commonData,
          nom_exploitation_agricole: assurance.nom_exploitation_agricole,
          lieu_de_lexploitation: assurance.lieu_de_lexploitation,
          motant_de_couverture_souhaite: assurance.motant_de_couverture_souhaite,
          capitaleagricole_assuré: assurance.capitaleagricole_assuré,
          typeagriculture: assurance.typeagriculture,
          typedecouverture: assurance.typedecouverture
        };
      case 'SANTE':
        return {
          ...commonData,
          typeAssuranceSante: assurance.typeAssuranceSante,
          niveauDeCouverture: assurance.niveauDeCouverture,
          condition_medicale: assurance.condition_medicale
        };
      case 'ENTREPRENEUR':
        return {
          ...commonData,
          nom_entreprise: assurance.nom_entreprise,
          adresse_entreprise: assurance.adresse_entreprise,
          activité_entreprise: assurance.activité_entreprise,
          typeAssuranceEntrep: assurance.typeAssuranceEntrep,
          bien_assuré: assurance.bien_assuré,
          historique_de_sinistralite: assurance.historique_de_sinistralite,
          responsbilité_civile: assurance.responsbilité_civile
        };
      case 'SCOLAIRE':
        return {
          ...commonData,
          nom_enfant: assurance.nom_enfant,
          prenom_enfant: assurance.prenom_enfant,
          capitalescolaire_assuré: assurance.capitalescolaire_assuré,
          montant_couverture: assurance.montant_couverture
        };
      default:
        return commonData;
    }
  }

  openDetailsModal(assurance: any, content: any) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
    }, (reason) => {
    });
    this.selectedAssurance = assurance;
  }


  findAssuranceById(id: number): void {
    this.assuranceService.findAssuranceById(id).subscribe(
      (assurance) => {
        console.log('Assurance found:', assurance);
      },
      (error) => {
        console.error('Error in finding assurance:', error);
      }
    );
  }

  openDeleteModal(id: number, content: any) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
      this.deleteAssurance(id);
    }, (reason) => {
    });
  }


  deleteAssurance(id: number): void {
    this.assuranceService.deleteAssurance(id).subscribe(
      () => {
        console.log('Assurance deleted successfully');
        this.getAllAssurances();
      },
      (error) => {
        console.error('Error in deleting assurance:', error);
      }
    );
  }


}
