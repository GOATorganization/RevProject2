import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { Message } from '../model/message.model';
import { Response } from '@angular/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgotlogin',
  templateUrl: './forgotlogin.component.html',
  styleUrls: ['./forgotlogin.component.css']
})
export class ForgotloginComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }

  public user: User = new User(0, '', '', '', '', '', '', '', undefined);

  public message: Message = new Message('');
  public emailNotFound: boolean = false;
  public emailSent: boolean = false;
  public response: Response;
  public token: string = '';

  requestPasswordReset(): void {
    this.userService.requestPasswordReset(this.user).subscribe(
      response => {
        //this.response = response;
        console.log(response);
        console.log(response.text);

        if (response.text.includes('FAILURE')) {
          this.emailSent = false;
          this.emailNotFound = true;
          console.log(this.emailSent);
        }
        else {
          this.emailSent = true;
          this.emailNotFound = false;
        }
      },
      error => this.message.text = 'Something went wrong.');
  }

  ngOnInit() {
  }
}
