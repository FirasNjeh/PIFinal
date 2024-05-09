import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationRequest, AuthenticationResponse } from '../../models';
import { Subscription } from 'rxjs';
import { Observable } from 'src/assets/BackOffice/vendor/tinymce/tinymce';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiURL = 'http://localhost:8081/api/v1/auth/'

  constructor(private http:HttpClient) { }
    authenticate(body:AuthenticationRequest) {
       return this.http.post("http://localhost:8081/api/v1/auth/authenticate",body);
    
}
RefreshToken()  {
  return this.http.post<void>("http://localhost:8081/api/v1/auth/refresh-token", {});
}
forgotPassword(email :string){

  return this.http.put(`http://localhost:8081/api/v1/auth/forgot-password?email=${email}`, null)

}
resetPassword(email: string, newPassword: string) {
  const url = `${this.apiURL}set-password`;

  // Constructing the request headers
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'newPassword': newPassword
  });

  // Sending the PUT request with email in query param and new password in header
  return this.http.put<string>(url, {}, { params: { email }, headers: headers});
}

}
