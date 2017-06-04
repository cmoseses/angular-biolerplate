import {NgModule} from '@angular/core';

import {AuthGuardService} from './auth-guard.service';
import {AuthService} from './auth.service';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [],
  exports: [],
  providers: [AuthService, AuthGuardService]
})

export class ServicesModule {
}
