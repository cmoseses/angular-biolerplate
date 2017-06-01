import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Question} from './question.model';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: 'dynamic-form-question.component.html',
  styleUrls: ['dynamic-form-question.component.css']
})

export class DynamicFormQuestionComponent {
  @Input() question: Question<any>;
  @Input() form: FormGroup;

  get isValid(): boolean {
    return this.form.controls[this.question.id].valid;
  }

}
