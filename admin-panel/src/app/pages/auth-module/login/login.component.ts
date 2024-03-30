import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  token: string;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  loginUser(): void {
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.getRawValue()).subscribe({
        next: (responce) => {
          this.token = responce?.token;
          console.log(this.token);
          alert('Kirish paroli togri!!!');
          this.router.navigate(['seller/product/all']);
        },
        error: (er) => {
          alert('Serverda hatolik mavjud!!');
          console.log(er);
        },
      });
    } else {
      alert("Noto'g'ri parol yoki nomer kiritildi");
    }
  }
}
