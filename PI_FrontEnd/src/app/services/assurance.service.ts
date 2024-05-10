import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssuranceService {
  private apiUrl = 'http://localhost:8081/user/Assurance';

  constructor(private http: HttpClient) {}

  findAllAssurances(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Assurances`);
  }

  findAssuranceById(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Assurance/${id}`);
  }

  deleteAssurance(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }

  getListAssurancesByPackAssur(idpack: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getByPackAssur/${idpack}`);
  }

  getListAssurancesByUser(iduser: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getByUser/${iduser}`);
  }

  createScolaireAssurance(userId: any, packId: any, scolaireAssuranceDTO: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-scolaire-assurance?userId=${userId}&packId=${packId}`, scolaireAssuranceDTO);
  }

  createEntrepreneurAssurance(userId: any, packId: any, entrepreneurAssuranceDTO: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-entrepreneur-assurance?userId=${userId}&packId=${packId}`, entrepreneurAssuranceDTO);
  }

  createSanteAssurance(userId: any, packId: number, santeAssuranceDTO: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-sante-assurance?userId=${userId}&packId=${packId}`, santeAssuranceDTO);
  }

  createAgricoleAssurance(userId: any, packId: any, agricoleAssuranceDTO: any) {
    return this.http.post<any>(`${this.apiUrl}/create-agricole-assurance?userId=${userId}&packId=${packId}`, agricoleAssuranceDTO);
  }


  countAssurancesByUserLastNYear(userId: any, n: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/countAssurancesByUserLastNYear/${userId}/${n}`);
  }

  countSinistresByUserLastNYear(userId: any, n: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/countSinistresByUserLastNYear/${userId}/${n}`);
  }

  calculScolairePrime(capitalescolaire_assure: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/calculScolairePrime?capitalescolaire_assure=${capitalescolaire_assure}`);
  }

  calculENTREPRENEURPrime(typeAssuranceEntrep: any, bienAssure: any): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/calculENTREPRENEURPrime?typeAssuranceEntrep=${typeAssuranceEntrep}&bienAssure=${bienAssure}`
    );
  }

  calculSANTEPrime(typeAssuranceSante: any, age: any, gender: any): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/calculSANTEPrime?typeAssuranceSante=${typeAssuranceSante}&age=${age}&gender=${gender}`
    );
  }

  calculAgriculturePrime(capitalAgricole_assure: any, typeAgriculture: any): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/calculAgriculturePrime?capitalAgricole_assure=${capitalAgricole_assure}&typeAgriculture=${typeAgriculture}`
    );
  }
}
