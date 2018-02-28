import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { Message } from '../model/message.model';

@Component({
  selector: 'app-forgotlogin',
  templateUrl: './forgotlogin.component.html',
  styleUrls: ['./forgotlogin.component.css']
})
export class ForgotloginComponent implements OnInit {

  constructor(private userService: UserService) { }

  public user: User = new User(0,'','','','','','','');

  public message: Message = new Message('');

  requestPasswordReset(): void {
    this.userService.requestPasswordReset(this.user).subscribe(
      message => this.message = message,
      error => this.message.text = 'Something went wrong.');
  }

  ngOnInit() {
  }
}
