import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/retryWhen';

import {Question} from '../dynamic-form/dynamic-form-question/question.model';
import {TextboxQuestion} from '../dynamic-form/dynamic-form-question/question-textbox.model';
import {AuthService} from '../services/auth.service';

interface UserLoginField {
  userid: string;
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
  private readonly returnUrl;
  private readonly defaultUrl = '/home';

  constructor(private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || this.defaultUrl;
  }

  ngOnInit() {
    this.authService.logout();
    this.loginQuestions = this.getLoginQuestions();

    this.subscription = this.loginClick
      .mergeMap((userLoginField: UserLoginField) =>
        this.authService.login(userLoginField.userid, userLoginField.password)
      )
      .do(console.log)
      .retryWhen(error =>
        error
          .do(e => console.log(e.message, 'retry after 1 s'))
          .delayWhen(val => Observable.timer(this.retryTime))
      )
      .subscribe(
        () => {
          this.router.navigate([this.defaultUrl]);
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getLoginQuestions(): Array<Question<any>> {
    return [
      new TextboxQuestion({
        id: 'userid',
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
