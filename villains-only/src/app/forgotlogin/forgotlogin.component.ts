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

  public user: User = new User(0,'','','','','','','', undefined);

  public message: Message = new Message('');

  requestPasswordReset(): void {
    this.userService.requestPasswordReset(this.user).subscribe(
      response => response.status == 200 ? this.router.navigate(['homepage']) : this.router.navigate(['homepage']),
      error => this.message.text = 'Something went wrong.');
  }

  ngOnInit() {
  }
}
