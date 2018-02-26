import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  isInEditMode = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getLoggedInUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe(user => { this.user = user; console.log('From profile component: getUser(): ' + user) });
  }

  editProfile(): void {
    this.isInEditMode = true;
  }

  submitProfileChanges(): void {
    console.log(this.user);
    this.userService.editProfile(this.user).subscribe(message => console.log(message));
    this.isInEditMode = false;
  }
}
