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
  // private currentUser : User;

  private userPost: string;
  private currentUser: User;


  constructor(private postService: PostService, private userService: UserService
    , private pictureService: PictureService) { }

  getAllPost(): void {
    this.postService.getAllPost().subscribe(
      postsIn => {
        // console.log(postsIn);
        for (let i = 0; i < postsIn.length; i++) {
          postsIn[i].contentsPic = [];
          let tempPic: Picture[];
          this.pictureService.getAllPicturesByPost(postsIn[i]).subscribe(
            picture => {
              tempPic = picture;
              postsIn[i].contentsPic = tempPic;
              // console.log(postsIn[i]);
              if (postsIn[i].contentsPic.length != 0) {
                postsIn[i].showHide = true;
              }
            },
            error => this.message.text = 'Failed');
        }
        this.posts = postsIn;
      },
      error => this.message.text = 'something went wrong');
  }

  submitPost(): void {
    console.log(this.userPost);
    // console.log(this.currentUser);

    var post = new Post(undefined, this.userPost, undefined, this.currentUser);
    console.log(post);
    this.postService.createPost(post).subscribe(
      message => this.message = message,
      error => this.message.text = 'Failed to post');

    (<HTMLInputElement>document.getElementById('postSubmit')).value = '';
    this.getAllPost();
  }

  ngOnInit() {
    this.getAllPost();

    this.currentUser = this.userService.getLoggedInUser();
  }

}
