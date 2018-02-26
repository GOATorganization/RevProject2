import { UserService } from './../services/user.service';
import { User } from './../model/user.model';
import { Message } from './../model/message.model';
import { PostService } from './../services/post.service';
import { Post } from './../model/post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css']
})
export class PostviewComponent implements OnInit {

  public message: Message = new Message('');
  private posts: Post[];
  private testUser2 = new User(1, '', '', 'Email@email.com', '', '' ,'', '');

  private userPost: string;


  constructor(private postService: PostService, private userService: UserService) { }

  getAllPost(): void {
    this.postService.getAllPost().subscribe(
      posts => {
        console.log(posts);
        for (var i = 0; i < posts.length; i++) {
          if (posts[i].contentsPic.length != 0) {
            posts[i].showHide = true;
          }
        }
        this.posts = posts
      },
      error => this.message.text = 'something went wrong');
  }

  submitPost(): void {
    console.log(this.userPost);
    this.userService.getUserByEmail(this.testUser2).subscribe(
      user => {
        var post = new Post(undefined, this.userPost, undefined, user);

        this.postService.createPost(post).subscribe(
          message => this.message = message,
          error => this.message.text = 'Failed to post');

      },
      error => this.message.text = 'Something went wrong'
    );
    (<HTMLInputElement>document.getElementById('postSubmit')).value = '';
    this.getAllPost();
  }

  ngOnInit() {
    this.getAllPost();
  }

}
