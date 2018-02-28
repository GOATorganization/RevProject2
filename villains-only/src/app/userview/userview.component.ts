import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';
import { User } from '../model/user.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  user: User = new User(0, '', '', '', '', '', '', '');
  villainname = 'Villain';
  profileimage = '../app/images/villainprofile.png';

  constructor(private userService: UserService, private data: DataService) { }

  ngOnInit() {
    console.log(this.user);
    this.data.currentMessage.subscribe(user =>
      this.user = user,
    );
    console.log(this.user);
  }

}
