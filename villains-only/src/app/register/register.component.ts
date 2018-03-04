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

  public user: User = new User(0, '', '', '', '', '', '', '', undefined);

  public message: Message = new Message('');
  public invalidEmail: boolean = false;
  public invalidPassword: boolean = false;
  public requiredFieldsMissing: boolean = false;

  registerUser(): void {
    if (this.validateRequiredInputs() && this.validateEmail(this.user.email) 
        && this.validatePassword(this.user.password)) {
      this.userService.registerUser(this.user).subscribe(
        message => this.message = message,
        error => this.message.text = 'Something went wrong.');
    }
  }

  // This email validation method was adapted from StackOverflow community wiki:
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  validateEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase()) && email != '')
      this.invalidEmail = true;
    else
      this.invalidEmail = false;

    return !this.invalidEmail;
  }

  validatePassword(password: string) {
    if (password.length < 8 && password != '')
      this.invalidPassword = true;
    else
      this.invalidPassword = false;

    return !this.invalidPassword;
  }

  validateRequiredInputs(): boolean {
    if (this.user.email.length == 0 || this.user.password.length == 0 ||
      this.user.firstName.length == 0 || this.user.lastName.length == 0) {
      this.requiredFieldsMissing = true;
    }
    else
      this.requiredFieldsMissing = false;

    return !this.requiredFieldsMissing;
  }

  ngOnInit() {
  }

}
