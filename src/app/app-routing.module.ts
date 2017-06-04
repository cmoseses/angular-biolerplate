import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './services/auth-guard.service';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
