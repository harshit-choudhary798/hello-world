import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input("title") Title?:string
isActive:Boolean=false;
  Active(){
    this.isActive=!this.isActive
  }

  constructor() { }

  ngOnInit(): void {
  }

}
