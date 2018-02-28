import { AlbumService } from './services/album.service';
import { CommentService } from './services/comment.service';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PostviewComponent } from './postview/postview.component';
import { CommentviewComponent } from './commentview/commentview.component';
import { ScrollpointDirective } from './scrollpoint.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { PictureViewComponent } from './picture-view/picture-view.component';
import { PostCommentComponent } from './post-comment/post-comment.component';




@NgModule({
  declarations: [
    AppComponent,
    PostviewComponent,
    CommentviewComponent,
    ScrollpointDirective,
    NavbarComponent,
    PictureViewComponent,
    PostCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [PostService, CommentService, AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
