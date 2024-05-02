import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MonthlyPayment } from 'src/app/model/MonthlyPayment';

@Injectable({
  providedIn: 'root'
})
export class MpFrontService {

  constructor(private http: HttpClient) { }
  //recuperation du pack par id 
  public afficherMp(id:number):Observable<Array<MonthlyPayment>>{
    return this.http.get<Array<MonthlyPayment>>('http://localhost:8081/user/MonthlyPayment/MonthlyPayment/creditNum/'+id);

  }
}
