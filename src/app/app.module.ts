import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {ChartModule} from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';

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

export function highchartsFactory() {
  const hc = require('highcharts');
  const dd = require('highcharts/modules/drilldown');
  dd(hc);

  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartModule,
    LoginModule,
    HomeModule,
    DashboardsModule,
    GirdModule,
    DropdownModule,
    NotFoundModule,
    HomeContentModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService, {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
