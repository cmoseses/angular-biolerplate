import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

import {Question} from '../dynamic-form/dynamic-form-question/question.model';
import {TextboxQuestion} from '../dynamic-form/dynamic-form-question/question-textbox.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginQuestions: Array<Question<any>>;
  loginClick: Subject<any> = new Subject<any>();

  private subscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.loginQuestions = this.getLoginQuestions();
    this.subscription = this.loginClick.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getLoginQuestions(): Array<Question<any>> {
    return [

      new TextboxQuestion({
        id: 'username',
        label: 'User Id',
        value: '',
        required: true
      }),

      new TextboxQuestion({
        id: 'password',
        label: 'password',
        value: '',
        required: true
      })
    ];
  }

}
