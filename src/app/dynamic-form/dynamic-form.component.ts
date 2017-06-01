import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/do';

import {Question} from './dynamic-form-question/question.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input() questions: Array<Question<any>> = [];
  @Output() formValue: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  submit: Subject<any> = new Subject<any>();

  private subscription: Subscription;

  ngOnInit(): void {
    this.form = this.generateControl(this.questions);

    this.subscription = this.submit
      .do((e: Event) =>
        e.preventDefault()
      )
      .do((e: Event) =>
        this.formValue.emit(this.form.value)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private generateControl(questions: Array<Question<any>>): FormGroup {

    const group: any = {};

    questions.forEach((question: any) => {
      group[question.id] = question.required ?
        new FormControl(question.value || '', Validators.required)
        :
        new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

}
