import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-confirmation-code',
  templateUrl: './confirmation-code.component.html',
  styleUrl: './confirmation-code.component.scss'
})
export class ConfirmationCodeComponent {
  confirmationForm: FormGroup;

  confirmationCode(){
    // code to confirm the user
    
  }
}
