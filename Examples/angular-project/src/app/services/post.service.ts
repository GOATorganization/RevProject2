import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// Import 'rxjs/RX
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


// Import Model
import { Posts } from './../models/post.model';

@Injectable()
export class PostService {

    constructor(private http: Http) {}

    public getAllPosts(): Observable<Posts[]> {
        return this.http
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .map((response: Response) => {
                return <Posts[]> response.json();
            })
            .catch(this.handleError);

    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
