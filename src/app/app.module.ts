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
import { EmailAddressArrayComponent } from './email-address-array/email-address-array.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post.service';
import { ApiTestingComponent } from './api-testing/api-testing.component';
import { ApiTestingService } from './api-testing.service';

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
    NewCourseFormComponent,
    EmailAddressArrayComponent,
    ResetPasswordComponent,
    PostsComponent,
    ApiTestingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    PostService,
    ApiTestingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
