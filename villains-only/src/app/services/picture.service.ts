import { Picture } from './../model/picture.model';
import { User } from './../model/user.model';
import { Post } from './../model/post.model';
import { Message } from './../model/message.model';
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// For Map
import "rxjs/Rx";

@Injectable()
export class PictureService{
    constructor(private http : Http){ }

    public getAllPictures() : Observable<Picture[]>{
        return this.http
            .get(`/VillainsOnly/getAllPictures.app`)
            .map((response : Response) =>{
                return <Picture[]>response.json();
            })
            .catch(this.handleError);
    }

    public getAllPicturesByPost(post : Post) : Observable<Picture[]>{
        const body = JSON.stringify(post);
        const headers = new Headers({'Content-Type' : 'application/json'});
        const options: RequestOptions = new RequestOptions({headers: headers});

        return this.http
            .post(`/VillainsOnly/getAllPicturesByPost.app`, body, options)
            .map((response : Response) => {
                return <Picture[]> response.json();
            })
            .catch(this.handleError);
    }

    public getAllPicturesByUser( user : User) : Observable<Picture[]>{
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type' : 'application/json'});
        const options: RequestOptions = new RequestOptions({headers:headers});

        return this.http
            .post('/VillainsOnly/getAllPicturesByUser.app',body,options)
            .map((response : Response) => {
                return <Picture[]> response.json();
            })
            .catch(this.handleError);
    }

    public addPicture( picture : Picture) : Observable<Message>{
        const body = JSON.stringify(picture);
        console.log(body);
        const headers = new Headers({'Content-Type' : 'application/json'});
        const options: RequestOptions = new RequestOptions({headers:headers});

        return this.http
            .post('/VillainsOnly/addPicture.app',body,options)
            .map((response : Response) => {
                return <Message> response.json();
            })
            .catch(this.handleError);
    }

    public editPicture( picture : Picture) : Observable<Message>{
        const body = JSON.stringify(picture);
        const headers = new Headers({'Content-Type' : 'application/json'});
        const options: RequestOptions = new RequestOptions({headers:headers});

        return this.http
            .post('/VillainsOnly/editPicture.app',body,options)
            .map((response : Response) => {
                return <Message> response.json();
            })
            .catch(this.handleError);
    }

    public deletePicture( picture : Picture) : Observable<Message>{
        const body = JSON.stringify(picture);
        const headers = new Headers({'Content-Type' : 'application/json'});
        const options: RequestOptions = new RequestOptions({headers:headers});

        return this.http
            .post('/VillainsOnly/deletePicture.app',body,options)
            .map((response : Response) => {
                return <Message> response.json();
            })
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}