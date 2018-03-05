import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { Message } from '../model/message.model';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {

  password: string = '';
  passwordConfirm: string = '';
  message: Message;
  nonMatchingPasswords: boolean = false;
  requiredFieldsMissing: boolean = false;

  @Input() email: string;
  token: string;


  constructor(private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
  }

  setNewPassword(): void {
    if (this.validateMatchingPasswords() && this.validateRequiredFields()) {
      this.userService.setNewPassword(this.email, this.token, this.password, this.passwordConfirm).subscribe(
        response => response.status == 200 ? this.router.navigate(['homepage']) : this.router.navigate(['homepage']),
        error => this.message.text = 'Something went wrong.');
    }
  }

  validateMatchingPasswords(): boolean {
    if (this.password != this.passwordConfirm)
      this.nonMatchingPasswords = true;
    else
      this.nonMatchingPasswords = false;

    return !this.nonMatchingPasswords;
  }

  validateRequiredFields(): boolean {
    if (this.password.length == 0 || this.passwordConfirm.length == 0 || this.token.length == 0)
      this.requiredFieldsMissing = true;
    else
      this.requiredFieldsMissing = false;

    return !this.requiredFieldsMissing;
  }

}
