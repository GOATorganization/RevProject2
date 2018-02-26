import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// For Map
import "rxjs/Rx";

import { User } from '../model/user.model';
import { Message } from '../model/message.model';

import { of } from "rxjs/observable/of";
import { tap } from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    public registerUser(user: User): Observable<Message> {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options: RequestOptions = new RequestOptions({ headers: headers });

        return this.http
            .post(`http://localhost:8090/VillainsOnly/registerUser.app`, body, httpOptions)
            .map((response: Response) => {
                return <Message>response.json();
            })
            .catch(this.myHandleError('registerUser', new Message('uh oh register user')));

    }

    public loginUser(user: User): Observable<Message> {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options: RequestOptions = new RequestOptions({ headers: headers });



        return this.http
            .post<Message>(`http://localhost:8090/VillainsOnly/loginUser.app`, body, httpOptions);
        // .map((response: Response) => {
        //     return <Message>response.json();
        // })
        // .catch(this.myHandleError('login user', new Message('Uh oh login')));

    }

    public getAllUser(): Observable<User[]> {
        return this.http
            .get<User[]>(`http://localhost:8090/VillainsOnly/getAllUser.app`);
        // .map((response: Response) => {
        //     return <User[]>response.json();
        // })
        // .catch(this.myHandleError('getAllUser', []));
    }

    public getHeroByEmail(user: User): Observable<User> {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options: RequestOptions = new RequestOptions({ headers: headers });

        return this.http
            .post<User>(`http://localhost:8090/VillainsOnly/getUserByEmail.app`, body, httpOptions);
        // .map((response: Response) => {
        //     return <User>response.json();
        // })
        // .catch(this.myHandleError('getHeroByEmail', new User(
        //     0,
        //     'John',
        //     'Moe',
        //     'someguy590@gmail.com',
        //     '',
        //     'Evil City',
        //     'Evil Country',
        //     'http://i0.kym-cdn.com/photos/images/facebook/000/862/065/0e9.jpg',
        //   )));

    }

    private myHandleError<T>(operataion = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

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
        return this.http
            .get<User>(`http://localhost:8090/VillainsOnly/loggedInUser.app`);
        // .map((response: Response) => {
        //     console.log('from getuser in user service: ' + response);
        //     return <User>response.json();
        // })
        // .catch(this.myHandleError('getUser', new User(
        //     3838,
        //     'f name',
        //     'l name',
        //     'email',
        //     'pass tho',
        //     'city really',
        //     'country onky',
        //     'no pic'
        // )));
    }

    editProfile(user: User): Observable<Message> {
        // update user cookie
        this.updateUserCookie(user);

        // update user data in repository
        return this.http.post<Message>(`http://localhost:8090/VillainsOnly/updateUserProfile.app`, user, httpOptions);
    }

    updateUserCookie(user: User) {
        document.cookie = `user=${JSON.stringify(user)}`;
    }

    getLoggedInUser(): User {
        let cookieName = "user";
        let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1")
        return <User>JSON.parse(cookieValue);
    }

}