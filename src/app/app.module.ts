import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { courseComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { TitlecasePipe } from './titlecase.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeCountComponent } from './like-count/like-count.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdemyCourseComponent } from './udemy-course/udemy-course.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    courseComponent,
    CourseComponent,
    SummaryPipe,
    TitlecasePipe,
    FavoriteComponent,
    PanelComponent,
    LikeCountComponent,
    ZippyComponent,
    ContactFormComponent,
    UdemyCourseComponent,
    SignUpFormComponent,
    NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
