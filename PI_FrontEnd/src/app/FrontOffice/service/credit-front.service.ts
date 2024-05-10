import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit, PackCredit, RelationGarant } from 'src/app/model/Credit';
import { MonthlyPayment } from 'src/app/model/MonthlyPayment';

@Injectable({
  providedIn: 'root'
})
export class CreditFrontService {

  constructor(private http: HttpClient) { }

  public addCredit(newcredit: {
    montant: number;
    //packCredit: PackCredit;
    duree: number;
    realtionGarant: RelationGarant;
  }, idp: number, idg: number): Observable<number> {
    const RelationGarantString: string = newcredit.realtionGarant.toString();
    // Construct the URL with dynamic parameters using template literals
    const url = `http://localhost:8081/user/Credit/add/${idp}/${idg}/1`;

    return this.http.post<number>(url, newcredit);
  }

  //recuperation de tous les Credit d'un utilisateur
  public getCreditUser(id:number): Observable<Array<Credit>> {
    return this.http.get<Array<Credit>>('http://localhost:8081/user/Credit/get/Credits/1');
  }

  //recuperation du credit par id user
  public findCreditById(id:number):Observable<Credit>{
    return this.http.get<Credit>('http://localhost:8081/user/Credit/'+id);

  }

  //recuperation du nbr credit par utilisateurs
  getNbrCredit(id:number): Observable<number> {
    return this.http.get<number>('http://localhost:8081/user/Credit/Stat/Nbr/User/'+id);
  }

  //recuperation du nbr credit Clo par utilisateurs
  getNbrCreditClo(id:number): Observable<number> {
    return this.http.get<number>('http://localhost:8081/user/Credit/Stat/NbrR/User/'+id);
  }

  simulateCredit(montantCredit: number, nbMois: number): Observable<any> {
    return this.http.get<any>('http://localhost:8081/user/Credit/simulateur/'+montantCredit+'/'+nbMois);
  }

  Max(salaire: number, nbMois: number): Observable<any> {
    return this.http.get<any>('http://localhost:8081/user/Credit/Max/'+nbMois+'/'+salaire);
  }

  addMonthlyPayment(id: number, monthlyPayment: MonthlyPayment, montant: number): Observable<any> {
    return this.http.post<any>('http://localhost:8081/user/MonthlyPayment/ajouter/'+id+'/'+montant, monthlyPayment);
  }
  

  Calcul_tableau_amo(id:number):Observable<any>{
    return this.http.get<number[][]>('http://localhost:8081/user/Credit/tableau_credit/'+id)
  }

  currency(quantity: number, convertTo: string): Observable<any> {
    return this.http.get<any>('http://localhost:8081/user/Credit/currency/'+convertTo+'/'+quantity);
  }

  
}
