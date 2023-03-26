import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy-course',
  templateUrl: './udemy-course.component.html',
  styleUrls: ['./udemy-course.component.css']
})
export class UdemyCourseComponent  {

submit(x:object){
  console.log(x)
}

}
