import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginModule} from './login/login.module';
import {HomeModule} from './home/home.module';
import {NotFoundModule} from './not-found/not-found.module';
import {AuthGuardService} from './services/auth-guard.service';
import {DashboardsModule} from './dashboards/dashboards.module';
import {HomeContentModule} from './home-content/home-content.module';
import {GirdModule} from './gird/gird.module';
import {DropdownModule} from './dropdown/dropdown.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    HomeModule,
    DashboardsModule,
    GirdModule,
    DropdownModule,
    NotFoundModule,
    HomeContentModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
