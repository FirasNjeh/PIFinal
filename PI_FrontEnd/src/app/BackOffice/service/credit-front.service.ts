import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from 'src/app/model/Credit';

@Injectable({
  providedIn: 'root'
})
export class CreditFrontService {

  constructor(private http:HttpClient) { }

  public afficherCredits(): Observable<Array<Credit>> {
    return this.http.get<Array<Credit>>('http://localhost:8081/user/Credit/all');
  }
}
