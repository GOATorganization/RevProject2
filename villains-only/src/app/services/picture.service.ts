import { Picture } from './../model/picture.model';
import { User } from './../model/user.model';
import { Post } from './../model/post.model';
import { Message } from './../model/message.model';
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// For Map
import "rxjs/Rx";
import { AwsS3Service } from './aws-s3.service';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class PictureService{
    constructor(private http : Http, private s3: AwsS3Service){ }

    public getAllPictures() : Observable<Picture[]>{
        return this.http
            .get(`http://localhost:8090/VillainsOnly/getAllPictures.app`)
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
            .post(`http://localhost:8090/VillainsOnly/getAllPicturesByPost.app`, body, options)
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
            .post('http://localhost:8090/VillainsOnly/getAllPicturesByUser.app',body,options)
            .map((response : Response) => {
                return <Picture[]> response.json();
            })
            .catch(this.handleError);
    }

    public addPicture( picture : Picture) : Observable<Message>{
        const body = JSON.stringify(picture);
        const headers = new Headers({'Content-Type' : 'application/json'});
        const options: RequestOptions = new RequestOptions({headers:headers});

        return this.http
            .post('http://localhost:8090/VillainsOnly/addPicture.app',body,options)
            .map((response : Response) => {
                return <Message> response.json();
            })
            .catch(this.handleError)
    }

    public editPicture( picture : Picture) : Observable<Message>{
        const body = JSON.stringify(picture);
        const headers = new Headers({'Content-Type' : 'application/json'});
        const options: RequestOptions = new RequestOptions({headers:headers});

        return this.http
            .post('http://localhost:8090/VillainsOnly/editPicture.app',body,options)
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
            .post('http://localhost:8090/VillainsOnly/deletePicture.app',body,options)
            .map((response : Response) => {
                return <Message> response.json();
            })
            .catch(this.handleError);
    }

    getPictureByUrl(url: string): Observable<Picture> {
        const body = url
        const headers = new Headers({'Content-Type' : 'text/plain'});
        const options: RequestOptions = new RequestOptions({headers:headers});

        return this.http
            .post('http://localhost:8090/VillainsOnly/getPictureByUrl.app', body, options)
            .map((response : Response) => {
                return <Picture> response.json();
            })
            .catch(this.handleError);
    }

    public addPictureToS3(file: File, callback:(err: Error, data: S3.ManagedUpload.SendData) => void) {
        this.s3.uploadFile(file, callback);
    }

    public updateUserCookie(user: User): void {
        document.cookie = `user=${JSON.stringify(user)}`;
    }

    public getLoggedInUser(): User {
        let cookieName = "user";
        let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1")
        return <User>JSON.parse(cookieValue);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}