import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: AuthService){}

  ngOnInit(): void{
    this.resetPasswordForm = this.formBuilder.group({
      PhoneNumber: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  resetPasswordUser(): void{
    if(this.resetPasswordForm.valid){
      this.service.resetPassword(this.resetPasswordForm.getRawValue())
      .subscribe({
        next: () => {
          alert("Parol yangilandi")
        },
        error: () => {
          alert("Ishimiz oxshamayapri")
        }
      })
    }
  }
}
