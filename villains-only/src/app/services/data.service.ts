import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../model/user.model';

@Injectable()
export class DataService {

  private user: User = new User(0, '', '', '', '', '', '', '',undefined);
  private messageSource = new BehaviorSubject<User>(this.user);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: User) {
    this.messageSource.next(message);
  }
}
