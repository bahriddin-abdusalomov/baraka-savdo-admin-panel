import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-code',
  templateUrl: './confirmation-code.component.html',
  styleUrl: './confirmation-code.component.scss',
})
export class ConfirmationCodeComponent {
  confirmationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.confirmationForm = this.formBuilder.group({
      Code: ['', Validators.required],
    });
  }

  confirmCode(): void {
    if (this.confirmationForm.valid) {
      this.service.emailConfirmationCode(this.confirmationForm.getRawValue())
        .subscribe({
          next: () => {
            alert('Ishimiz muvaffaqiyatli amalga oshirildi');
            this.router.navigateByUrl('/reset');
          },
          error: () => {
            alert('Ishimiz oxshamayapti');
          },
        });
    }
  }
}
