// register.component.ts

import { Component, INJECTOR, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  registerUser(): void {
    if (this.registrationForm.valid) {
      this.service.register(this.registrationForm.getRawValue()).subscribe({
        next: () => {
          alert("Ro'yxatdan o'tdingiz !");
          this.router.navigateByUrl('/seller/product/all'); 
        },
        error: () => {
          alert('Serverda hatolik mavjud!');
        },
      });
    } else {
      alert(
        "Forma noto'g'ri to'ldirilgan" + this.registrationForm.getRawValue()
      );
    }
  }

}
