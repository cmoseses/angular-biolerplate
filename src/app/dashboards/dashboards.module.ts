import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardsComponent} from './dashboards.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DashboardsComponent],
  exports: [DashboardsComponent]
})
export class DashboardsModule {
}
