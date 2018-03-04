import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { Message } from '../model/message.model';

@Injectable()
export class LikepostService {


  constructor(private userService: UserService, private postService: PostService) { }

  noMatch = false;
  public message: Message = new Message('');
  index: number;

  

  likePost(post: Post, user: User) {
    if (!user.likes) {
      user.likes = [];
    }
    user.likes.forEach(element => {
      if (element.postId === post.postId) {
        this.noMatch = true;
      }
    });
    if (this.noMatch === true) {
      console.log('already liked,unliking');
      this.index = user.likes.indexOf(post, 0);
      user.likes.splice(this.index, 1);
      this.noMatch = false;
    } else {
      console.log('not liked,liking');
      user.likes.push(post);
      console.log(user.likes);
    }
    console.log(post);
    this.userService.addLike(user.likes).subscribe(message => {

    },
      error => this.message.text = 'Failed to like');
  }

}
