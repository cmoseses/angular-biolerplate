import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login.component';
import {DynamicFormModule} from '../dynamic-form/dynamic-form.module';
import {AuthService} from '../services/auth.service';

@NgModule({
  imports: [CommonModule, DynamicFormModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthService]
})

export class LoginModule {
}
