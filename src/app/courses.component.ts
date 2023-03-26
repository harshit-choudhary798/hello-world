import { Component } from "@angular/core";
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <h2> {{title}} </h2>

    <input 
    [(ngModel)]= "titless"
    >
    
    <!-- <h3 [textContent]="titless | summary:4 "></h3> -->
    <h3>{{titless | summary:4}}</h3>

    <h3 [textContent]= "titless | titlecase" ></h3>

    <h3 [textContent]= "titless "></h3>

    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>

    

    `
})

export class courseComponent{
    title='List of Courses';
    courses;
    titless:string="";
    price:number=34
    pressed(){
        
    }

    constructor(service:CoursesService){
        this.courses=service.getcourses();
    }
}
