import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses=["course 1","course 2","course 3"]
  
  getcourses(){
    return this.courses;
  }
  
   

}
