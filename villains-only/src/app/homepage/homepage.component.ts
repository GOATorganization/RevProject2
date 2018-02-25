import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { Message } from '../model/message.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private userService: UserService) { }

  public user: User = new User(0,'','','','','','','');

  public message: Message = new Message('');

  registerUser(): void {
    this.userService.registerUser(this.user).subscribe(
      message => this.message = message,
      error => this.message.text = 'Something went wrong.');
  }

  loginUser(): void {
    console.log(this.user.email + " " + this.user.password);
    this.userService.loginUser(this.user).subscribe(
      message => this.message = message,
      error => this.message.text = 'Something went wrong.');
  }

  ngOnInit() {
  }


}
