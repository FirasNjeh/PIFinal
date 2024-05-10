import {HttpClient, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PackAssurService {
  private apiUrl = 'http://localhost:8081/user/PackAssur';

  constructor(private http: HttpClient) { }

  addPackAssur(packAssur: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, packAssur);
  }

  findAllPacksAssur(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  findPackAssurById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updatePackAssur(id: number, packAssur: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, packAssur);
  }

  deletePackAssur(id: number): Observable<any> {
    return this.http.delete<string>(`${this.apiUrl}/delete/${id}`);
  }

  uploadImage(file: File, idpack: number): Observable<HttpEvent<any>> {
    console.log("currentfile",file);
    console.log("this.idpack",idpack);
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<string>(`${this.apiUrl}/${idpack}/uploadimage`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  getListFiles(idpack: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${idpack}/images`);
  }

  getPackAssurAssuranceCounts(): Observable<Map<any, any>> {
    return this.http.get<Map<any, any>>(`${this.apiUrl}/assuranceCounts`);
  }
}
