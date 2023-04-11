import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ApiTestingComponent } from './api-testing/api-testing.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:'profiles/:id/:username',component:ProfileComponent},
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
