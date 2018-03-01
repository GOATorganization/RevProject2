import { Picture } from './../model/picture.model';
import { PictureService } from './../services/picture.service';
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
  private profilePicture: string;
  private posts: Post[];

  private userPost: string;
  private currentUser: User;

  private maxChar: number = 250;
  private charLeft: number;

  private rawUrlString: string;
  private imageUrl: Picture[];


  constructor(private postService: PostService, private userService: UserService
    , private pictureService: PictureService) { }

  getAllPost(): void {
    this.postService.getAllPost().subscribe(
      postsIn => {
        console.log(postsIn);
        for (let i = 0; i < postsIn.length; i++) {
          // let tempPic: Picture[];
          // this.pictureService.getAllPicturesByPost(postsIn[i]).subscribe(
          //   picture => {
          //     tempPic = picture;
          //     console.log(tempPic);
          //     postsIn[i].contentsPic = tempPic;
          //  console.log(picture);
          if (postsIn[i].contentsPic.length != 0) {
            postsIn[i].showHide = true;
          }
          // },
          // error => this.message.text = 'Failed');
        }
        this.posts = postsIn;
      },
      error => this.message.text = 'something went wrong');
  }

  submitPost(): void {
    console.log(this.userPost);

    this.imageUrl = [];
    let tempPicture: Picture = new Picture(undefined, undefined, undefined);
    var post = new Post(undefined, this.userPost, undefined, this.currentUser, undefined);
    if (this.rawUrlString != undefined) {
      let rawUrl = this.rawUrlString.split(" ");
      for (let k = 0; k < rawUrl.length; k++) {
        tempPicture = new Picture(undefined, undefined, rawUrl[k]);
        this.imageUrl[k] = tempPicture;
      }
    }
    post.contentsPic = this.imageUrl;

    this.postService.createPost(post).subscribe(
      post => {
      },
      error => this.message.text = 'Failed to post');

    (<HTMLInputElement>document.getElementById('postSubmit')).value = '';
    (<HTMLInputElement>document.getElementById('imgInput')).value = '';
    this.getAllPost();
  }

  getCharLeft() {
    this.charLeft = this.maxChar - this.userPost.length;
  }

  ngOnInit() {
    this.getAllPost();
    this.charLeft = this.maxChar;
    this.currentUser = this.userService.getLoggedInUser();
  }

}
