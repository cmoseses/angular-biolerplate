import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';

import {environment} from '../../environments/environment';
import {UserOption, User} from '../models/user.model';

@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }

  login(userid: string, password: string): Observable<User> {
    return this.http.get('./assets/users.json')
      .map(response =>
        response.json()
      )
      .map((userOptions: Array<UserOption>) =>
        userOptions.map(userOption => new User(userOption))
      )
      .map((users: Array<User>) =>
        users.find(user => user.userid === userid && user.password === password)
      )
      .mergeMap((user: User) => {
        if (user) {
          localStorage.setItem(environment.currentUserStorageKey, JSON.stringify(user));
          return Observable.of(user);
        } else {
          return Observable.throw(new Error('user not exists'));
        }
      });
  }

  logout(): void {
    localStorage.removeItem(environment.currentUserStorageKey);
  }

}
