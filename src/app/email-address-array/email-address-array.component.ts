import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-address-array',
  templateUrl: './email-address-array.component.html',
  styleUrls: ['./email-address-array.component.css']
})
export class EmailAddressArrayComponent {

  form= new FormGroup({
    'emails' : new FormArray([],Validators.required)
  });

  remove(index: number) {
    // const emails = this.emails as FormArray;
    this.emails.removeAt(index);
  }

  add(inputValue: HTMLInputElement){
    this.emails.push(new FormControl(inputValue.value))
  }
  get emails(){
    return this.form.get('emails') as FormArray
  }
}
