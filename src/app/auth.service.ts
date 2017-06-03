import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

  constructor() {
  }

  login(username: string, password: string): Observable<boolean> {
    if (username === '1') {
      return Observable.of(true);
    } else {
      return Observable.throw(new Error('user not exists'));
    }
  }

  logout(username: string): void {
    localStorage.removeItem(username);
  }

}
