import { CommentService } from './../services/comment.service';
import { Comment } from './../models/comment.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentview',
  templateUrl: './commentview.component.html',
  styleUrls: ['./commentview.component.css']
})
export class CommentviewComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService) { }

  getAllComments(): void{
    this.commentService.getAllComments()
    .subscribe(
        comments => this.comments = comments,
        error => console.log(`Error: ${ error }`)
    );

  }

  getCommentById(id: number) :void{
    this.commentService.getCommentsByPostId(id)
    .subscribe(
      comments => this.comments = comments,
      error => console.log(`Error: ${ error }`)
    );
  }

  ngOnInit() {
    this.getAllComments();
  }

}
