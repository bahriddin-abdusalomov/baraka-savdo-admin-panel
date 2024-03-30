import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.scss'
})
export class EmailVerificationComponent {
  emailVerificationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: AuthService) {}

  ngOnInit(): void {
    this.emailVerificationForm = this.formBuilder.group({
      PhoneNumber: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  resetPasswordUser(): void {
    if (this.emailVerificationForm.valid) {
      this.service
        .resetPassword(this.emailVerificationForm.getRawValue())
        .subscribe({
          next: () => {
            alert('Parol yangilandi');
          },
          error: () => {
            alert('Ishimiz oxshamayapri');
          },
        });
    }
  }
}
