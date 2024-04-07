import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.scss',
})
export class EmailVerificationComponent {
  emailVerificationForm: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.emailVerificationForm = this.formBuilder.group({
      Email: ['', Validators.required],
    });
  }
  emailVerification(): void {
    if (this.emailVerificationForm.valid) {
      this.service
        .sendVerificationCode(this.emailVerificationForm.getRawValue())
        .subscribe({
          next: (response) => {
            this.id = response?.id;
            this.cookieService.set('userId', this.id)
            alert('Ishimiz muvaffaqiyatli amalga oshirildi');
            this.router.navigateByUrl('/confirmation');
          },
          error: () => {
            alert('Ishimiz oxshamayapti');
          },
        });
    }
  }
}
