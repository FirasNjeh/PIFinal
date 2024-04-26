import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PackCredit, RelationGarant } from 'src/app/model/Credit';

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
}
