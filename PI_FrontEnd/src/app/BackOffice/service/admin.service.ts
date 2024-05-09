import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionCredit } from 'src/app/model/TransactionCredit';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  public getTotal(): Observable<number> {
    return this.http.get<number>('http://localhost:8081/user/Credit/Stat/TotalLoan');
  }
  public getNbrC(): Observable<number> {
    return this.http.get<number>('http://localhost:8081/user/Credit/Stat/NbrCredit');
  }
  public getClo(): Observable<number> {
    return this.http.get<number>('http://localhost:8081/user/Credit/Stat/NbrCredit/Cloture');
  }
  public getAct(): Observable<Array<TransactionCredit>> {
    return this.http.get<Array<TransactionCredit>>('http://localhost:8081/user/TransactionCredit/all');
  }

  getPackCreditCounts(): Observable<Map<any, any>> {
    return this.http.get<Map<any, any>>('http://localhost:8081/user/PackCR/creditCounts');
  }
}
