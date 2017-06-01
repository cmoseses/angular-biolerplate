import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DynamicFormComponent} from './dynamic-form.component';
import {DynamicFormQuestionModule} from './dynamic-form-question/dynamic-form-question.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, DynamicFormQuestionModule],
  declarations: [DynamicFormComponent],
  exports: [DynamicFormComponent]
})

export class DynamicFormModule {
}
