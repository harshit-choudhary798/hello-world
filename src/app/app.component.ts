import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  post={
    isActive:true
  }


  working(isActive:boolean){
    console.log("function called from app component",isActive)
  }

  tweet={
    isliked:true,
    count:0
  }
  viewmode:string="map"
  myVar:string="value1"
  
  showMessages=[1,2,3,4,5]
}
