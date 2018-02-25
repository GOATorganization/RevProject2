import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// For Map
import "rxjs/Rx";

import { User } from '../model/user.model';
import { Message } from '../model/message.model';

<<<<<<< HEAD
import { of } from "rxjs/observable/of";

=======
>>>>>>> cf8641b96f416bf3db7eebd86c68c8c03d6932c3

@Injectable()
export class UserService {
    constructor(private http: Http) { }

<<<<<<< HEAD
    public registerUser(user: User): Observable<Message> {
=======
    public registerUser(user: User) : Observable<Message> {
>>>>>>> cf8641b96f416bf3db7eebd86c68c8c03d6932c3
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type' : 'application/json'});
        const options: RequestOptions = new RequestOptions({headers: headers});

<<<<<<< HEAD
        return this.http
=======
        return this.http   
>>>>>>> cf8641b96f416bf3db7eebd86c68c8c03d6932c3
            .post(`http://localhost:8090/VillainsOnly/registerUser.app`, body, options)
            .map((response: Response) => {
                return <Message>response.json();
            })
            .catch(this.handleError);

    }

    public loginUser(user: User) : Observable<Message> {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type' : 'application/json'});
        const options: RequestOptions = new RequestOptions({headers: headers});

        console.log(body);

        return this.http   
            .post(`http://localhost:8090/VillainsOnly/loginUser.app`, body, options)
            .map((response: Response) => {
                return <Message>response.json();
            })
            .catch(this.handleError);

    }

    public getAllUser() : Observable<User[]> {
        return this.http
            .get(`http://localhost:8090/VillainsOnly/getAllUser.app`)
            .map((response: Response) => {
                return <User[]>response.json();
            })
            .catch(this.handleError);
    }
    
    public getHeroByEmail(user: User) : Observable<User> {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type' : 'application/json'});
        const options: RequestOptions = new RequestOptions({headers: headers});

        return this.http
            .post(`http://localhost:8090/VillainsOnly/getUserByEmail.app`, body, options)
            .map((response: Response) => {
                return <User>response.json();
            })
            .catch(this.handleError);

    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

<<<<<<< HEAD
    user: User = new User(
        0,
        'John',
        'Moe',
        'someguy590@gmail.com',
        '',
        'Evil City',
        'Evil Country',
        'http://i0.kym-cdn.com/photos/images/facebook/000/862/065/0e9.jpg',
      );
    
      getUser(): Observable<User> {
        return of(this.user);
      }
    
      editProfile(user: User) {
        this.user = user;
      }

=======
>>>>>>> cf8641b96f416bf3db7eebd86c68c8c03d6932c3
}