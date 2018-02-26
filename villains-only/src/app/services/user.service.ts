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

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    public registerUser(user: User): Observable<Message> {
        return this.http
            .post<Message>(`http://localhost:8090/VillainsOnly/registerUser.app`, user, httpOptions)
            .pipe(
                catchError(this.myHandleError('registerUser', new Message('Error registering user')))
            );
    }

    public loginUser(user: User): Observable<Message> {
        return this.http
            .post<Message>(`http://localhost:8090/VillainsOnly/loginUser.app`, user, httpOptions)
            .pipe(
                catchError(this.myHandleError('loginUser', new Message('Error logging in')))
            );
    }

    public getAllUser(): Observable<User[]> {
        return this.http
            .get<User[]>(`http://localhost:8090/VillainsOnly/getAllUser.app`)
            .catch(this.handleError);
    }

    public getHeroByEmail(user: User): Observable<User> {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options: RequestOptions = new RequestOptions({ headers: headers });

        return this.http
            .post<User>(`http://localhost:8090/VillainsOnly/getUserByEmail.app`, body, httpOptions)
            .catch(this.handleError);

    }

    editProfile(user: User): Observable<Message> {
        // update user cookie
        this.updateUserCookie(user);

        // update user data in repository
        return this.http
            .post<Message>(`http://localhost:8090/VillainsOnly/updateUserProfile.app`, user, httpOptions)
            .pipe(
                catchError(this.myHandleError('editProfile', new Message('Error editing profile')))
            );
    }

    updateUserCookie(user: User) {
        document.cookie = `user=${JSON.stringify(user)}`;
    }

    getLoggedInUser(): User {
        let cookieName = "user";
        let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1")
        return <User>JSON.parse(cookieValue);
    }

    private myHandleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}