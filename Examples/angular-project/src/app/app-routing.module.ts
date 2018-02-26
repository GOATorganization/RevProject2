import { PictureViewComponent } from './picture-view/picture-view.component';
import { CommentviewComponent } from './commentview/commentview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostviewComponent } from './postview/postview.component';

const routes: Routes = [
  { path: '', redirectTo: '/postview', pathMatch: 'full' },
  { path: 'postview', component: PostviewComponent },
  { path: 'commentview', component: CommentviewComponent },
  { path: 'pictureview', component: PictureViewComponent }
];

@NgModule({
  /*
  You first must initialize the router and start it listening for browser location changes.
  Add RouterModule to the @NgModule.imports array 
  and configure it with the routes in one step by calling RouterModule.forRoot() 
  within the imports array, like this:
  
  The method is called forRoot() because you configure the router at the application's 
  root level. The forRoot() method supplies the service providers and directives needed 
  for routing, and performs the initial navigation based on the current browser URL.
  */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }