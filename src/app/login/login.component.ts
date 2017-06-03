import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/retryWhen';

import {Question} from '../dynamic-form/dynamic-form-question/question.model';
import {TextboxQuestion} from '../dynamic-form/dynamic-form-question/question-textbox.model';
import {AuthService} from '../auth.service';

interface UserLoginField {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  loginQuestions: Array<Question<any>>;
  loginClick: Subject<any> = new Subject<any>();

  private subscription: Subscription;
  private readonly retryTime = 1000;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginQuestions = this.getLoginQuestions();
    this.subscription = this.loginClick
      .mergeMap((userLoginField: UserLoginField) =>
        this.authService.login(userLoginField.username, userLoginField.password)
      )
      .retryWhen(error =>
        error
          .do(e => console.log(e.message, 'retry after 1 s'))
          .delayWhen(val => Observable.timer(this.retryTime))
      )
      .subscribe(
        () => {
          this.router.navigate(['/home']);
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getLoginQuestions(): Array<Question<any>> {
    return [
      new TextboxQuestion({
        id: 'username',
        label: 'User ID',
        value: '',
        required: true
      }),

      new TextboxQuestion({
        id: 'password',
        label: 'Password',
        value: '',
        required: true
      })
    ];
  }
}
