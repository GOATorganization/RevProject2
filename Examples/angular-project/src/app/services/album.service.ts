import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

// Import 'rxjs/RX
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Albums } from './../models/picture.model';

@Injectable()
export class AlbumService {

  constructor(private http: Http) { }

  public getAlbum(pId: number): Observable<Albums[]> {
    console.log(`https://jsonplaceholder.typicode.com/albums/${pId}/photos`);
    return this.http
      .get(`https://jsonplaceholder.typicode.com/albums/${pId}/photos`)
      .map((response: Response) => {
        return <Albums[]>response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
