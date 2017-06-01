import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DynamicFormQuestionComponent} from './dynamic-form-question.component';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [DynamicFormQuestionComponent],
  exports: [DynamicFormQuestionComponent]
})

export class DynamicFormQuestionModule {
}
