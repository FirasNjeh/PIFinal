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
  }

   //Suppression du credit par id 
   public delete(id:number):Observable<Garant>{
    return this.http.delete<Garant>('http://localhost:8081/user/Garant/delete/'+id);

  }
}

  