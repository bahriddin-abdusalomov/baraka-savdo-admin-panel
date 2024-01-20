// register.component.ts

import { Component, INJECTOR, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: AuthService) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  registerUser(): void {
    if (this.registrationForm.valid) {
      this.service.register(this.registrationForm.getRawValue()).subscribe({
        next: () => {
          alert("Ro'yxatdan o'tdingiz !");
        },
        error: () => {
          alert('Solto oshipka!');
        },
      });
    } else {
      alert(
        "Forma noto'g'ri to'ldirilgan" + this.registrationForm.getRawValue()
      );
    }
  }
}
