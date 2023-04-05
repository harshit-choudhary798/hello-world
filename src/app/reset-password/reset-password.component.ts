import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidation } from './password.validation';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent  {

  form = new FormGroup({
    'oldPassword': new FormControl('', [Validators.required],passwordValidation.OldPasswordMatch),
    'newPassword': new FormControl('',[ Validators.required]),
    'confirmPassword': new FormControl('', [ Validators.required])
  });
  

  get oldPassword() {return this.form.get('oldPassword')}
  get newPassword() {return this.form.get('newPassword')}
  get confirmPassword() {return this.form.get('confirmPassword')}
}
 