import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardsComponent} from './dashboards.component';
import {ChartModule} from 'angular2-highcharts';
import {LogService} from '../services/log.service';

@NgModule({
  imports: [CommonModule, ChartModule],
  declarations: [DashboardsComponent],
  exports: [DashboardsComponent],
  providers: [LogService]
})

export class DashboardsModule {
}
