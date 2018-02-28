import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private data: DataService) { }

  public user: User = new User(0, '', '', '', '', '', '', '');

  ngOnInit() {
  }

  public getHero(): void {
    console.log(this.user);
    this.userService.getUserByEmail(this.user).subscribe(user => {
      this.data.changeMessage(user);
      this.router.navigate(['userhome']);

    },
      error => { console.log('something went wrong'); }
    );
  }



}
