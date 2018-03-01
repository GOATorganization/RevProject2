import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';

@Injectable()
export class LikepostService {


  constructor(private userService: UserService, private postService: PostService) { }

  noMatch = false;
  index: number;

  likePost(post: Post, user: User) {
    if (post.likedBy === undefined) {
      post.likedBy = [];
    }
    console.log('Post liked!!');
    console.log(post.postId + ' User:' + user.firstName);
    console.log('Likedby length:' + post.likedBy.length);
    post.likedBy.forEach(element => {
      if (element.id === user.id) {
        this.noMatch = true;
      }
    });
    if (this.noMatch == true) {
      console.log('already liked,unliking');
      this.index = post.likedBy.indexOf(user, 0);
      post.likedBy.splice(this.index, 1);
      this.noMatch = false;
    } else {
      console.log('not liked,liking');
      post.likedBy.push(user);
      console.log(post.likedBy);
    }
    this.postService.editPost(post);
    console.log(post);
  }

}
