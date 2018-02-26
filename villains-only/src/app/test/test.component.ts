import { User } from './../model/user.model';
import { Message } from './../model/message.model';
import { Post } from './../model/post.model';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private users: User[];
  private posts : Post[];
  public message: Message = new Message('');

  

  private userGrabber: User; 
  private userGetter = new User(1, '', '', 'Email@email.com', '', '' ,'', '');

  constructor(private userService: UserService, private postService :PostService) { }

  getAllPost(): void{
    this.postService.getAllPost().subscribe(
      posts => {
        console.log(posts);
        this.posts = posts
      },
      error =>  this.message.text = 'something went wrong');
  }

  getAllUser(): void{
    this.userService.getAllUser().subscribe(
      user => {
        console.log(user);
        this.users = user
      },
      error =>  this.message.text = 'something went wrong');
  }

  getUserByEmail(userId : User) : void{
    this.userService.getHeroByEmail(userId).subscribe(
      user => {
        console.log(user);
        this.userGrabber = user;
        this.postService.getAllPostByUser(user).subscribe(
          post => {
            console.log(post);
            let editPost = new Post(undefined, 'THis is a tester thing', undefined, user);
            this.postService.createPost(editPost).subscribe(
              message => this.message = message,
              error => this.message.text = 'something wen wrong');
          },
          error =>  this.message.text = 'something went wrong');

      },
      error => this.message.text = 'something went wrong');
  }

 



  ngOnInit() {
    this.getAllPost();
    this.getAllUser();
    this.getUserByEmail(this.userGetter);
  }

}
