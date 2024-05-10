import {HttpClient, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SinistreService {
  private apiUrl = 'http://localhost:8081/user/Siniste';

  constructor(private http: HttpClient) {}

  findAllSinistres(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Sinsitres`);
  }

  findSinistreById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Sinistre/${id}`);
  }

  updateSinistre(id: number, sinistre: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateS/${id}`, sinistre);
  }

  deleteSinistre(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/deleteS/${id}`);
  }

  getListSinistresByAssurance(idassur: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/byAssurance/${idassur}`);
  }

  createSinistreWithAssurance(idassur: number, sinistre: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/createWithAssurance/${idassur}`, sinistre);
  }

  uploadImage(file: File, idsinistre: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<string>(`${this.apiUrl}/${idsinistre}/uploadimage`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  acceptSinistre(idsin: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/accept/${idsin}`, {});
  }

  refuseSinistre(idsin: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/refuse/${idsin}`, {});
  }

}
