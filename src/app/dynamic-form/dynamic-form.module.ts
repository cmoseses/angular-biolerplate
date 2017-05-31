import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DynamicFormComponent} from './dynamic-form.component';
import {DynamicFormInputModule} from './dynamic-form-input/dynamic-form-input.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, DynamicFormInputModule],
  declarations: [DynamicFormComponent],
  exports: [DynamicFormComponent]
})

export class DynamicFormModule {
}
