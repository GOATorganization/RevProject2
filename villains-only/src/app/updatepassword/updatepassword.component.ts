import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Message } from '../model/message.model';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {

  password: string;
  passwordConfirm: string;
  message: Message;

  email: string;
  token: string;


  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.email = this.activatedRoute.snapshot.queryParams["email"];
      this.token = this.activatedRoute.snapshot.queryParams["token"];
      console.log(this.email);
    });
  }

  setNewPassword(): void {
    this.userService.setNewPassword(this.email, this.token, this.password, this.passwordConfirm).subscribe(
      response => response.status == 200 ? this.router.navigate(['homepage']) : this.router.navigate(['homepage']),
      error => this.message.text = 'Something went wrong.');
  }


}
