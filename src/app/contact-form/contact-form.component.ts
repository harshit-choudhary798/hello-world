import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  log(x:object){
    console.log(x)
  }
  submit(f:object){
    console.log(f)
    
  }
  contactMethods=
  [
    {id:1,name:'email'},
    {id:2,name:'phone'},
    {id:3,name:'message'}
]

  constructor() { }

  ngOnInit(): void {
  }

}
