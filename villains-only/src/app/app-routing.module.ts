import { PostviewComponent } from './postview/postview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserviewComponent } from './userview/userview.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotloginComponent } from './forgotlogin/forgotlogin.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {path: 'homepage', component: HomepageComponent},
  { path: 'userhome', component: UserviewComponent },
  { path: 'userprofile', component: ProfileComponent },
  { path: 'postview', component: PostviewComponent },
  { path: 'forgotlogin', component: ForgotloginComponent },
  { path: 'updatepassword', component: UpdatepasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
