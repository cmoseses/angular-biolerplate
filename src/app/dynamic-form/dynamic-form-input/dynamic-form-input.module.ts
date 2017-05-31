import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicFormInputComponent} from './dynamic-form-input.component';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [DynamicFormInputComponent],
  exports: [DynamicFormInputComponent]
})

export class DynamicFormInputModule {
}
