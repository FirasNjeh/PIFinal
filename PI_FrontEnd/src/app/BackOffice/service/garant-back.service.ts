import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Garant } from 'src/app/model/Garant';

@Injectable({
  providedIn: 'root'
})
export class GarantBackService {

  constructor(private http:HttpClient) { }

  public afficherGarants(): Observable<Array<Garant>> {
    return this.http.get<Array<Garant>>('http://localhost:8081/user/Garant/all');
  }}
