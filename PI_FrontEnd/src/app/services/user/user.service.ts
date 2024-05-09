import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangePasswordRequest, UpdateUserRequest, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http : HttpClient) { }

  ChangePassword(request :ChangePasswordRequest){
    return this.http.patch<void>("http://localhost:8081/user/fn/changepassword",request);
  }
  UpdateCurrentUser(updatedUser:UpdateUserRequest){
    return this.http.put<void>("http://localhost:8081/user/fn/update",updatedUser);
  }
  getCurrentUser(){
    return this.http.get<User>("http://localhost:8081/user/fn/currentUser");
  }
}
