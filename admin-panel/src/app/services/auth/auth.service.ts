import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterDto } from '../../dtos/auth/registerDto';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = 'https://localhost:7030/api/Authorization/';

  constructor(private http: HttpClient) { }

  register(register: RegisterDto){
    return this.http.post<RegisterDto>(`${this.apiUrl}/Register`, register)
  }
}
