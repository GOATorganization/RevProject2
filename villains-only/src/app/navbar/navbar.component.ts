import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { User } from '../model/user.model';
import { Router, RouterEvent } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private data: DataService) { 

    // On page change, trigger an action.
    router.events.filter(e => e instanceof RouterEvent).subscribe(e => {
      // console.log("page change");
      // this.nameChange();
    });
  }

  public user: User = new User(0, '', '', '', '', '', '', '',undefined);
  public currentUser: User = new User(0, '', '', '', '', '', '', '', undefined);

  ngOnInit() {
    
  }

  nameChange(){
    this.currentUser = this.userService.getLoggedInUser();
  }

  clearUser(){
    this.currentUser = new User(0, '', 'Home', '', '', '', '', '',undefined);
    this.userService.clearUserCookie();
  }
  

  public getHero(): void {
    this.userService.getUserByEmail(this.user).subscribe(user => {
      this.data.changeMessage(user);
      this.router.navigate(['userhome']);

    },
      error => { console.log('something went wrong'); }
    );
  }

  public toHomePostView(): void {
    let loggedInUser = this.userService.getLoggedInUser();
    this.userService.getUserByEmail(loggedInUser).subscribe(user => {
      this.data.changeMessage(user);
      this.router.navigate(['userhome']);

    },
      error => { console.log('something went wrong'); }
    );
  }



}
