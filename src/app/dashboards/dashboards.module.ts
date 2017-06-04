import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardsComponent} from './dashboards.component';
import {ChartModule} from 'angular2-highcharts';

@NgModule({
  imports: [CommonModule, ChartModule],
  declarations: [DashboardsComponent],
  exports: [DashboardsComponent]
})

export class DashboardsModule {
}
