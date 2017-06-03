import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login.component';
import {DynamicFormModule} from '../dynamic-form/dynamic-form.module';

@NgModule({
  imports: [CommonModule, DynamicFormModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})

export class LoginModule {
}
