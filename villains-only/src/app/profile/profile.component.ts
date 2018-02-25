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
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe(user => this.user = user);
  }

  editProfile(): void {
    this.isInEditMode = true;
  }

  submitProfileChanges(): void {
    this.userService.editProfile(this.user);
    this.isInEditMode = false;
  }
}
