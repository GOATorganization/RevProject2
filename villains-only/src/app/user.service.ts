import { Injectable } from '@angular/core';
import { User } from './model/user';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
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

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return of(this.user);
  }

  editProfile(user: User) {
    this.user = user;
  }

  testRequest(url: string): Observable<Object> {
    return this.http.get<any>(url);
  }

}
