import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationResponse, RegisterRequest } from '../../models';
import { VerificationRequest } from '../../models/verification-request';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  Register(body:RegisterRequest) {
    return this.http.post<AuthenticationResponse>("http://localhost:8081/api/v1/auth/register",body);
}
verifyCode(verificationRequest: VerificationRequest) {
  return this.http.post<AuthenticationResponse>
  ("http://localhost:8081/api/v1/auth/verify", verificationRequest);
}
}