import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor( private http :HttpClient) { }
  logout(token: string): Observable<any> {
    const logoutUrl = 'http://localhost:8081/api/v1/auth/logout';
    
    // Création des en-têtes avec le token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Options pour la requête HTTP avec les en-têtes
    const httpOptions = {
      headers: headers
    };

    // Effectuer une requête POST vers l'URL de déconnexion avec les en-têtes
    return this.http.post(logoutUrl, {}, httpOptions);
  }
}
