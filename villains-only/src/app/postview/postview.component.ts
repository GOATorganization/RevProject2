import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { postList } from '../post';

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css']
})
export class PostviewComponent implements OnInit {
  private postss: Post[];

  constructor() {
    this.postss = postList;
   }

  ngOnInit() {
  }

}
