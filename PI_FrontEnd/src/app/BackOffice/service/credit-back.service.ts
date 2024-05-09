import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from 'src/app/model/Credit';

@Injectable({
  providedIn: 'root'
})
export class CreditBackService {

  constructor(private http:HttpClient) { }

  public afficherCredits(): Observable<Array<Credit>> {
    return this.http.get<Array<Credit>>('http://localhost:8081/user/Credit/all');
  }
  //recuperation du credit par id 
  public findCreditById(id:number):Observable<Credit>{
    return this.http.get<Credit>('http://localhost:8081/user/Credit/'+id);

  }

  //Suppression du credit par id 
  public delete(id:number):Observable<Credit>{
    return this.http.delete<Credit>('http://localhost:8081/user/Credit/delete/'+id);

  }

  public FindByMontant(montant :number){
    return this.http.get<Credit[]>(`http://localhost:8081/user/Credit/get/montant/${montant}`);
  
  }

 
}
