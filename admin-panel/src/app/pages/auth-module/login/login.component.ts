import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      PhoneNumber: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  loginUser(): void {
    if (this.loginForm.valid) {
      let data = this.service.login(this.loginForm.getRawValue()).subscribe({
        next: () => {
          alert('Kirish paroli togri!!!');
        }
        // error: () => {
        //   alert('Kalla qoyding uka !');
        //   console.log(data);
        // },
      });
    } else {
      alert('Parol notogri kiritildi!!');
    }
  }
}
