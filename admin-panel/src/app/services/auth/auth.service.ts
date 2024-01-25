import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiUrl: string = "https://185.217.131.187:7030/api/Authorization/";

  constructor(private http: HttpClient) { }

  register(register: any){
    return this.http.post<any>("https://185.217.131.187:7030/api/Authorization/Register", register)
  }

  login(login: any){
    return this.http.get<any>("https://185.217.131.187:7030/api/Authorization/Login", login)
  }

  resetPassword(resetPassword: any){
    return this.http.put<any>("https://185.217.131.187:7030/api/Authorization/ResetPassword", resetPassword)
  }
}
