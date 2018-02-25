import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// For Map
import "rxjs/Rx";

import { User } from '../model/user.model';
import { Message } from '../model/message.model';


@Injectable()
export class UserService {
    constructor(private http: Http) { }

    public registerUser(user: User) : Observable<Message> {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type' : 'application/json'});
        const options: RequestOptions = new RequestOptions({headers: headers});

        return this.http   
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
    

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}