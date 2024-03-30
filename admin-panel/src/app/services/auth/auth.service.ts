import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  login(login: any): Observable<any> {
    return this.http.post<any>(
      'https://localhost:7030/api/Authorization/Login',
      login
    );
  }

  resetPassword(resetPassword: any) {
    return this.http.put<any>(
      'https://localhost:7030/api/Authorization/ResetPassword',
      resetPassword
    );
  }
}
