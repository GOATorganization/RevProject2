
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// Import 'rxjs/RX
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


// Import Model
import { Comment } from './../models/comment.model';

@Injectable()
export class CommentService {

    constructor(private http: Http) {}

    public getAllComments(): Observable<Comment[]> {
        return this.http
            .get(`https://jsonplaceholder.typicode.com/comments`)
            .map((response: Response) => {
                return <Comment[]> response.json();
            })
            .catch(this.handleError);

    }

    public getCommentsByPostId(pId: number): Observable<Comment[]> {
        return this.http
            .get(`https://jsonplaceholder.typicode.com/posts/${pId}/comments`)
                .map((response: Response) => {
                    return <Comment[]> response.json();
                })
                .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
