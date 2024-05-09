import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Garant } from 'src/app/model/Garant';

@Injectable({
  providedIn: 'root'
})
export class GarantFrontService {

  constructor(private http:HttpClient) { }

  public addGarant(newgarant:{
    name:String;
    prenomGarant:String;
    salaire_garant:number;
    cin:number;
    }): Observable<number>{

    return this.http.post<number>('http://localhost:8081/user/Garant/add',newgarant); }

    public findGarantById(id:number):Observable<Garant>{
      return this.http.get<Garant>('http://localhost:8081/user/Garant/id'+id);}
}
