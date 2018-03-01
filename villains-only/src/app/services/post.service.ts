import { User } from './../model/user.model';
import { Post } from './../model/post.model';
import { Message } from './../model/message.model';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// For Map
import 'rxjs/Rx';


@Injectable()
export class PostService {
    constructor(private http: Http) { }

    public createPost(post: Post): Observable<Post> {
        const body = JSON.stringify(post);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options: RequestOptions = new RequestOptions({ headers: headers });

        return this.http
            .post(`/VillainsOnly/createPost.app`, body, options)
            .map((response: Response) => {
                return <Post>response.json();
            })
            .catch(this.handleError);
    }

    public editPost(post: Post): Observable<Message> {
        const body = JSON.stringify(post);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options: RequestOptions = new RequestOptions({ headers: headers });

        return this.http
            .post(`/VillainsOnly/editPost.app`, body, options)
            .map((response: Response) => {
                return <Message>response.json();
            })
            .catch(this.handleError);
    }

    public getAllPost(): Observable<Post[]> {
        return this.http
            .get(`/VillainsOnly/getAllPost.app`)
            .map((response: Response) => {
                return <Post[]>response.json();
            })
            .catch(this.handleError);
    }

    public getAllPostByUser(user: User): Observable<Post[]> {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options: RequestOptions = new RequestOptions({ headers: headers });

        return this.http
            .post(`/VillainsOnly/getAllPostByUser.app`, body, options)
            .map((response: Response) => {
                return <Post[]>response.json();
            })
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    // public getLikes(post: Post): Observable<User[]> {
    //     const body = JSON.stringify(post);
    //     const headers = ({ 'Content-Type': 'application/json' });
    //     const options: RequestOptions = new RequestOptions({ headers: headers });
    //     return
    // }

}
