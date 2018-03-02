import { PictureService } from './../services/picture.service';
import { User } from './../model/user.model';
import { Message } from './../model/message.model';
import { Post } from './../model/post.model';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Picture } from '../model/picture.model';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private users: User[];
  private posts : Post[];
  private pictures : Picture[];
  public message: Message = new Message('');

  private testUser2 = new User(2, '', '', 'Email@email.com', '', '' ,'', '',undefined);

  private userGrabber: User; 
  private userGetter = new User(1, '', '', 'Email@email.com', '', '' ,'', '',undefined);
  private poster = new Post(6, '', undefined, this.userGetter, undefined, undefined);

  constructor(private userService: UserService, private postService :PostService
    ,private pictureService : PictureService) { }

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
    this.userService.getUserByEmail(userId).subscribe(
      user => {
        console.log(user);
        this.userGrabber = user;
        this.postService.getAllPostByUser(user).subscribe(
          post => {
            console.log(post);
          },
          error =>  this.message.text = 'something went wrong');

      },
      error => this.message.text = 'something went wrong');
  }

  getAllPicture() :void {
    this.pictureService.getAllPictures().subscribe(
      picture => {
        this.pictures = picture;
        console.log(picture);
      },
      error =>this.message.text = 'Something went wrong');
  }

  getAllPictureByPost(post : Post) : void{
    this.pictureService.getAllPicturesByPost(post).subscribe(
      picture => {
        this.pictures = picture;
        console.log(picture);
      },
      error =>this.message.text = 'Something went wrong');
  } 

  getAllPictureByUser(user : User) : void{
    this.pictureService.getAllPicturesByUser(user).subscribe(
      picture => {
        this.pictures = picture;
        console.log(picture);
      },
      error =>this.message.text = 'Something went wrong');
  } 




 



  ngOnInit() {
    // this.getAllPost(); 
    // this.getAllUser();
    // this.getUserByEmail(this.userGetter);
    // this.getAllPicture();
    // this.getAllPictureByPost(this.poster)
    // this.getAllPictureByUser(this.testUser2);
    // this.getAllPictureByUser(this.userGetter);
  }

}
