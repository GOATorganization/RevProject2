import { CommentService } from './../services/comment.service';

// Model
import { Posts } from './../models/post.model';
import { Comment } from './../models/comment.model';

//Service
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css']
})
export class PostviewComponent implements OnInit {


  posts: Posts[];
  comments : Comment[];
  count =0;

  constructor(private postService : PostService,
                private commentService : CommentService) { }

  getPosts(){

    // An Http Client method does not begin the http request until subscribe is called on the observable returned by that method.
    // True for all HTTPClient Methods. This makes HTTP Requests execution deferred allowing an extension of the obserable with 
    // additional operations such as tap and catch error before things happen. 
    // Subscribe is called on a observable and allows us to listen in on the data coming through the observable. 

    this.postService.getAllPosts().subscribe(
      // Because the service returns an array of posts
      
      posts =>{
        for(let i = 0; i < posts.length; i++){
          posts[i].userId = this.getUserName(posts[i].userId);
           console.log(posts[i].userId);
           this.countUp(posts[i]);
        }
     
        this.posts = posts;

      } ,
      error => console.log(`Error: ${ error}`)
    );
    
  }

  countUp(postsG : Posts){
    
    this.commentService.getCommentsByPostId(postsG.id).subscribe(
      // Because the service returns an array of posts
      comments =>{
        // for(let i = 0; i < comments.length; i++){
        //    console.log(comments[i]);
        // }
        postsG.comments = comments;

      } ,
      error => console.log(`Error: ${ error}`)
    );
  }

  toggleShow(postk : Posts){
    postk.showHide = !postk.showHide;
  }

  getCommentById(id: number) :void{
    this.commentService.getCommentsByPostId(id)
    .subscribe(
      comments => this.comments = comments,
      error => console.log(`Error: ${ error }`)
    );
  }

  getUserName(id: number) : string{
    switch(id){
      case 1: {
        return 'Leanne Graham';
      }
      case 2: {
        return "Ervin Howell";
      }
      case 3: {
        return "Clementine Bauch";
      }
      case 4: {
        return "Patricia Lebsack";
      }
      case 5: {
        return 	"Chelsey Dietrich";
      }
      case 6: {
        return "Mrs. Dennis Schulist";
      }
      case 7: {
        return "Kurtis Weissnat";
      }
      case 8: {
        return "Nicholas Runolfsdottir V";
      }
      case 9: {
        return "Glenna Reichert";
      }
      case 10: {
        return "Clementina DuBuque";
      }
      default: {
        return "";
      }
    }
  }

  ngOnInit() {
    this.getPosts();
    
  }

}
