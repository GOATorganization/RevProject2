import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-other-profile',
  templateUrl: './view-other-profile.component.html',
  styleUrls: ['./view-other-profile.component.css']
})
export class ViewOtherProfileComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    let userEmail = this.route.snapshot.paramMap.get('userEmail');
    let tempUser = new User(0, null, null, userEmail, null, null, null, null, null);
    this.userService.getUserByEmail(tempUser).subscribe(user => this.user = user);
  }
}
