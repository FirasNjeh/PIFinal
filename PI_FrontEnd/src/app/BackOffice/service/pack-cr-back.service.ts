import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PackCredit } from 'src/app/model/Credit';
import { Observable } from 'rxjs';
import { PackCR } from 'src/app/model/PackCR';

@Injectable({
  providedIn: 'root'
})
export class PackCrBackService {

  constructor(private http: HttpClient) { }

  public addPackCR(newpack: {
    nom: String;
    description: String;
    montantMin: number;
    montantMax: number;
    image: String;
    nomImage: String;
    packCredit: PackCredit;
  }): Observable<number> {
    // Check if packCredit is defined before calling toString
    const packCreditString: string = newpack.packCredit ? newpack.packCredit.toString() : '';

    return this.http.post<number>('http://localhost:8081/user/PackCR/add', newpack);
  }

  public afficherPackCR(): Observable<Array<PackCR>> {
    return this.http.get<Array<PackCR>>('http://localhost:8081/user/PackCR/all');
  }

  //Suppression du credit par id 
  public delete(id: number): Observable<PackCR> {
    return this.http.delete<PackCR>('http://localhost:8081/user/PackCR/delete/' + id);
  }

  updatePack(id: number, pack: any): Observable<any> {
    return this.http.put<any>(`http://localhost:8081/user/PackCR/update/${id}`, pack);
  }
}
