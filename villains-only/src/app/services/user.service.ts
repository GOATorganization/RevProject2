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
import { Router, RouterModule } from "@angular/router";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class UserService {


    constructor(private http: Http,
        private router: Router) { }

    public setNewPassword(email: string, token: string, password: string, passwordConfirm: string): Observable<Response> {
        const body = JSON.stringify({ email: email, token: token, password: password, passwordConfirm: passwordConfirm });
        console.log("body is " + body);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options: RequestOptions = new RequestOptions({ headers: headers });

        return this.http
            .post(`/VillainsOnly/setNewPassword.app`, body, options)
            .map((response: Response) => {
                return response;
            })
            .catch(this.handleError);
    }


    public registerUser(user: User): Observable<Message> {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options: RequestOptions = new RequestOptions({ headers: headers });

        return this.http
            .post(`/VillainsOnly/registerUser.app`, body, options)
            .map((response: Response) => {
                return <Message>response.json();
            })
            .catch(this.handleError);
    }

    public requestPasswordReset(user: User): Observable<Message> {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options: RequestOptions = new RequestOptions({ headers: headers });
        return this.http
            .post(`/VillainsOnly/requestPasswordReset.app`, body, options)
            .map((response: Response) => {
                return <Message>response.json();
            })
            .catch(this.handleError);
    }

    public loginUser(user: User): Observable<Message> {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options: RequestOptions = new RequestOptions({ headers: headers });

        return this.http
            .post(`/VillainsOnly/loginUser.app`, body, options)
            .map((response: Response) => {
                return <Message>response.json();
            })
            .catch(this.handleError);
    }

    public test(): Observable<Response> {
        return this.http
            .get(`/VillainsOnly/test.app`)
            .map((response: Response) => {
                console.log(response);
                return response;
            })
            .catch(this.handleError);
    }

    public getAllUser(): Observable<User[]> {
        return this.http
            .get(`/VillainsOnly/getAllUser.app`)
            .map((response: Response) => {
                return <User[]>response.json();
            })
            .catch(this.handleError);
    }

    editProfile(user: User): Observable<Message> {
        // update user cookie
        this.updateUserCookie(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options: RequestOptions = new RequestOptions({ headers: headers });

        const body = JSON.stringify(user);

        // update user data in repository
        return this.http
            .post(`/VillainsOnly/updateUserProfile.app`, body, options)
            .map((response: Response) => {
                return <Message>response.json();
            })
            .catch(this.handleError);
    }


    public getUserByEmail(user: User): Observable<User> {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options: RequestOptions = new RequestOptions({ headers: headers });

        // update user data in repository
        return this.http
            .post(`/VillainsOnly/getUserByEmail.app`, body, options)
            .map((response: Response) => {
                return <Message>response.json();
            })
            .catch(this.handleError);
    }

    updateUserCookie(user: User): void {
        document.cookie = `user=${JSON.stringify(user)}`;
    }

    clearUserCookie(): void {
        document.cookie = `user=; max-age=0`;
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
