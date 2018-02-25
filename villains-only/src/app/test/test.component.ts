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

  getUserById(userId : number) : User{
    this.userService
  }



  ngOnInit() {
    this.getAllPost();
    this.getAllUser();
  }

}
