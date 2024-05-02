import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Credit } from 'src/app/model/Credit';
import { CreditFrontService } from '../service/credit-front.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MonthlyPayment, StatusMonthlyPayment } from 'src/app/model/MonthlyPayment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-le-credit-front',
  templateUrl: './le-credit-front.component.html',
  styleUrls: ['./le-credit-front.component.css']
})
export class LeCreditFrontComponent {
  credit!: Observable<Credit[]> | undefined;
  credit1!:Observable<Credit> ;
  errorMessage: Object | undefined;

  id!: number;
  montant!:number;
  status!:StatusMonthlyPayment;
  duree!:number;
  lateDays!:number;
  


  constructor(private creditService: CreditFrontService,private route: ActivatedRoute,private router:Router, private modalService: NgbModal,private datePipe: DatePipe){}

 
  //La fonction de récupération de l'id du Credit selectionné
   ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      const idc: number = params['id'];
      console.log('ID du Credit récupéré est: ', idc);
      if(idc){
        this.findCreditById(idc);
      }
    })
     }
    ;

  //get Credit par id 
  findCreditById(id: number): void {
    console.log('ID du credit ' + id);
    this.credit1 = this.creditService.findCreditById(id);
    this.credit1.subscribe(data => {
        console.log('Credit Retrieved:', data);
    });}

  // la fonction a mettre sur le bouton pour passer al l'autre page en fonction de l'id
  // recuperationid(credit:Credit): void{
  //   const idc:number = credit.id;
  //   console.log('l id du Credit récupéré est : ' + idc);
  //   //la redirection vers la page du pack
  //   this.router.navigate(['/Credit',idc]);
  // }

  openAddTransModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  addMonthlyPayment(idc: number, montant: number) {
    console.log('Attempting to add monthly payment...');
    const monthlyPayment: MonthlyPayment = {
      id: 0, // This will be ignored by the backend
      SupposedDate: new Date(), // You need to set this accordingly
      paymentDate: new Date(), // You need to set this accordingly
      lateDays: this.lateDays, // You need to set this accordingly
      montant: montant,
      status: StatusMonthlyPayment.RESOLVED, // You need to set this accordingly
      // creditM: { id: idc } // You need to pass the credit id
    }
    
    this.route.params.subscribe((params: Params) => {
      idc = params['id']; // Stockez l'ID du pack dans la variable de classe
      console.log('ID du credit récupéré est: ',idc);
      if (idc) {
        this.findCreditById(idc);
      }
    });

    this.creditService.addMonthlyPayment(idc, monthlyPayment, montant).subscribe(
      (response) => {
        console.log('Monthly payment added successfully:', response);
        // Optionally, you can navigate or perform any other action upon success
      },
      (error) => {
        console.error('Failed to add monthly payment:', error);
        // Optionally, you can show an error message or perform any other action upon error
      }
    );



   
  }


  getCurrentDate(): string {
    // Get current date
    const currentDate = new Date();

    // Format the date using DatePipe
    return this.datePipe.transform(currentDate, 'yyyy-MM-dd') || '';
  }
  









}
