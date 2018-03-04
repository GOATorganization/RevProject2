import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { Message } from '../model/message.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  imageSource = '../../assets/VillainsOnlyLogo.png';
  constructor(private userService: UserService, private router: Router) { }

  public user: User = new User(0,'','','','','','','', undefined);

  public message: Message = new Message('');

  ngOnInit() {
    
  }

  getUserLikes(): void{
    this.userService.getUserLikes(this.user).subscribe(
      postLike => {
        console.log(postLike);              
          this.user.likes = postLike;
      },
      error => this.message.text = 'something went wrong');
  }

  registerUser(): void {
    this.userService.registerUser(this.user).subscribe(
      message => this.message = message,
      error => this.message.text = 'Something went wrong.');
  }

  loginUser(): void {
    this.userService.loginUser(this.user).subscribe(
      message => {
        this.message = message;
        let msg = message.text.toLowerCase();
        
        if (msg.includes('success')) {
           console.log(message.text);
          this.userService.getUserByEmail(this.user).subscribe(user => {
            this.userService.getUserLikes(user).subscribe(
              posts => user.likes = posts
            );
            this.user = user;
            console.log(this.user);
            this.userService.updateUserCookie(user);
            this.router.navigate(['/postview']);
          });
        }
        else {
          console.log(message.text);
        }
  },
  error => {this.message.text = 'Something went wrong logging in.'; console.log(this.message.text)});
  }
}
