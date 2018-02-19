import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  villainname = 'Villain';
  profileimage = '../app/images/villainprofile.png';

  constructor() { }

  ngOnInit() {
  }

}
