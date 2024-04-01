import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      NewPassword: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
    });
  }
  resetPasswordUser(): void {
    if (this.resetPasswordForm.valid) {
      this.service
        .resetPassword(this.resetPasswordForm.getRawValue())
        .subscribe({
          next: () => {
            alert('Parol yangilandi');
            this.router.navigateByUrl('/seller/product/all');
          },
          error: () => {
            alert('Ishimiz oxshamayapri');
          },
        });
    }
  }
}
