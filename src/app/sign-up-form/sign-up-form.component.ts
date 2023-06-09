import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

import { Usernamevalidators } from './username.validation';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent { 

  form = new FormGroup({
    'username': new FormControl(
      '',

      [ Validators.required,Validators.minLength(3),Usernamevalidators.cannotContainSpace],

        Usernamevalidators.cannotContainHarshit
        
      ),
      'password' : new FormControl()
    });
  
    login(){
      this.form.setErrors({
        invalidLogin :true
      });
    }
  get username(){
    return this.form.get('username')
  }
  constructor() { }


}
