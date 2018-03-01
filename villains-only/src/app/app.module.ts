import { DataService } from './services/data.service';
import { PostviewComponent } from './postview/postview.component';
import { PictureService } from './services/picture.service';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserviewComponent } from './userview/userview.component';
import { UserService } from './services/user.service';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { TestComponent } from './test/test.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotloginComponent } from './forgotlogin/forgotlogin.component';
import { LikepostService } from './services/likepost.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    UserviewComponent,
    RegisterComponent,
    TestComponent,
    ProfileComponent,
    PostviewComponent,
    ForgotloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [UserService, PostService, PictureService, DataService, LikepostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
