import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import e from 'express';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'https://localhost:7030/api/Authorization/';

  constructor(private http: HttpClient) {}

  register(register: any) {
    return this.http.post<any>(
      'https://localhost:7030/api/Authorization/Register',
      register
    );
  }

  login(login: any) {
    return this.http.post<any>(
      'https://localhost:7030/api/Authorization/Login',
      login
    );
  }

  sendVerificationCode(email: any) {
    return this.http.post<any>(
      'https://localhost:7030/api/Authorization/SendVerificationCode',
      email
    );
  }

  emailConfirmationCode(emailConfirmationCode: any) {
    return this.http.post<any>(
      'https://localhost:7030/api/Authorization/EmailConfirmationCode',
      emailConfirmationCode
    );
  }

  resetPassword(resetPassword: any) {
    return this.http.put<any>(
      'https://localhost:7030/api/Authorization/ResetPassword',
      resetPassword
    );
  }
}
