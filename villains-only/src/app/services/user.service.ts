import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// For Map
import "rxjs/Rx";

import { User } from '../model/user.model';
import { Message } from '../model/message.model';

import { of } from "rxjs/observable/of";
import { tap, catchError } from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const headers = new Headers({ 'Content-Type': 'application/json' });
const options: RequestOptions = new RequestOptions({ headers: headers });

@Injectable()
export class UserService {


    constructor(private http: Http) { }


    public registerUser(user: User): Observable<Message> {
        const body = JSON.stringify(user);

        return this.http
            .post(`http://localhost:8090/VillainsOnly/registerUser.app`, body, options)
            .map((response: Response) => {
                return <Message>response.json();
            })
            .catch(this.handleError);
    }

    public requestPasswordReset(user: User) : Observable<Message> {
        const body = JSON.stringify(user);

        return this.http   
            .post(`http://localhost:8090/VillainsOnly/requestPasswordReset.app`, body, options)
            .map((response: Response) => {
                return <Message>response.json();
            })
            .catch(this.handleError);
    }

    public loginUser(user: User): Observable<Message> {
        const body = JSON.stringify(user);

        return this.http
            .post(`http://localhost:8090/VillainsOnly/loginUser.app`, body, options)
            .map((response: Response) => {
                return <Message>response.json();
            })
            .catch(this.handleError);
    }

    public getAllUser(): Observable<User[]> {
        return this.http
            .get(`http://localhost:8090/VillainsOnly/getAllUser.app`)
            .map((response: Response) => {
                return <User[]>response.json();
            })
            .catch(this.handleError);
    }

    public getHeroByEmail(user: User): Observable<User> {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options: RequestOptions = new RequestOptions({ headers: headers });

        return this.http
            .post(`http://localhost:8090/VillainsOnly/getUserByEmail.app`, body, options)
            .map((response: Response) => {
                return <User>response.json();
            })
            .catch(this.handleError);

    }

    editProfile(user: User): Observable<Message> {
        // update user cookie
        this.updateUserCookie(user);

        const body = JSON.stringify(user);

        // update user data in repository
        return this.http
            .post(`http://localhost:8090/VillainsOnly/updateUserProfile.app`, body, options)
            .map((response: Response) => {
                return <Message>response.json();
            })
            .catch(this.handleError);
    }


    public getUserByEmail(user: User): Observable<User> {
        const body = JSON.stringify(user);

        // update user data in repository
        return this.http
            .post(`http://localhost:8090/VillainsOnly/updateUserProfile.app`, body, options)
            .map((response: Response) => {
                return <Message>response.json();
            })
            .catch(this.handleError);
    }

    updateUserCookie(user: User): void {
        document.cookie = `user=${JSON.stringify(user)}`;
    }

    getLoggedInUser(): User {
        let cookieName = "user";
        let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1")
        return <User>JSON.parse(cookieValue);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}