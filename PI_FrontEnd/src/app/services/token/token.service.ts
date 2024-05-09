import { Injectable } from '@angular/core';
import { Token } from '../models';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  getToken(){
    return localStorage.getItem('access_token');
  }

  set access_token(access_token :string){
    localStorage.setItem('access_token', access_token);
}

  get access_token(){
    return localStorage.getItem('access_token') as string;
  }
  set refresh_token(refresh_token :string){
    localStorage.setItem('refresh_token',refresh_token);

  }
  get refresh_token(){
    return localStorage.getItem('refresh_token') as string;
  }
}
