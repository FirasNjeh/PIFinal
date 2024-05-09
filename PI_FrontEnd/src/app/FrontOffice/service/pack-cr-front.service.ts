import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PackCR } from 'src/app/model/PackCR';

@Injectable({
  providedIn: 'root'
})

export class PackCrFrontService {

  constructor(private http: HttpClient) { }

  //recuperation de tous les packs
  public getPacksCR(): Observable<Array<PackCR>> {
    return this.http.get<Array<PackCR>>('http://localhost:8081/user/PackCR/all');
  }

  //recuperation du pack par id 
  public findPackCRById(id:number):Observable<PackCR>{
    return this.http.get<PackCR>('http://localhost:8081/user/PackCR/'+id);

  }
}
