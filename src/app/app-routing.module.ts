import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ApiTestingComponent } from './api-testing/api-testing.component';
import { PostsComponent } from './posts/posts.component';
import { ZippyComponent } from './zippy/zippy.component';
import { HomepageComponent } from './homepage/homepage.component';
import { courseComponent } from './courses.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'profiles/:id',component:courseComponent},
  { path:'profiles',component:ApiTestingComponent},
  {path:'posts',component:PostsComponent}

  
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
