// register.component.ts

import { Component, INJECTOR, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: AuthService) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  registerUser(): void {
    if (this.registrationForm.valid) {
      // O'z logikangizni yozishingiz mumkin
       alert('Foydalanuvchi ro\'yxatdan o\'tdi:' + this.registrationForm.getRawValue());
    } else {
      // Validatsiyadan o'tmagan maydonlar bor
       alert('Forma noto\'g\'ri to\'ldirilgan' + this.registrationForm.getRawValue());
    }
  }
}