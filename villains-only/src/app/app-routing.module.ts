import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserviewComponent } from './userview/userview.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ForgotloginComponent } from './forgotlogin/forgotlogin.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent},
  { path: 'userhome', component: UserviewComponent },
  { path: 'forgotLogin', component: ForgotloginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
