import { Message } from './../model/message.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';
import { PostService } from '../services/post.service';
import { PictureService } from '../services/picture.service';
import { LikepostService } from '../services/likepost.service';
import { User } from '../model/user.model';
import { Post } from '../model/post.model';
import { Picture } from '../model/picture.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  public message: Message = new Message('');
  user: User = new User(0, '', '', '', '', '', '', '', undefined);
  villainname = 'Villain';
  profileimage = '../app/images/villainprofile.png';
  private posts: Post[];

  constructor(private userService: UserService, private data: DataService,
    private postService: PostService, private pictureService: PictureService,
    private likepostService: LikepostService) { }

  postDisplay() {
    this.postService.getAllPostByUser(this.user).subscribe(
      postsIn => {
        console.log(postsIn);
        for (let i = 0; i < postsIn.length; i++) {
          // tslint:disable-next-line:triple-equals
          if (postsIn[i].contentsPic.length != 0) {
            postsIn[i].showHide = true;
          }
        }
        this.posts = postsIn;
      },
      error => this.message.text = 'something went wrong');
  }

  ngOnInit() {
    // console.log(this.user);
    this.data.currentMessage.subscribe(user => {
      this.user = user;
      this.postDisplay();
    },
      error => console.log('Error in userview Component, onInit')
    );

  }

  likePost(post: Post) {
    this.likepostService.likePost(post, this.userService.getLoggedInUser());
    post.likedPost = !post.likedPost;
  }

}
