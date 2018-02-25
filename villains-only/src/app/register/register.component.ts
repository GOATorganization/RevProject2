import { Message } from './../model/message.model';
import { User } from './../model/user.model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  constructor(private userService: UserService) { }

  public user: User = new User(0,'','','','','','','');

  public message: Message = new Message('');

  registerUser(): void {
    this.userService.registerUser(this.user).subscribe(
      message => this.message = message,
      error => this.message.text = 'Something went wrong.');
  }

  

  ngOnInit() {
    
  }

}
