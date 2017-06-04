import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {HomeContentComponent} from '../home-content/home-content.component';
import {DashboardsComponent} from '../dashboards/dashboards.component';


const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeContentComponent
      },
      {
        path: 'home-content',
        component: HomeContentComponent
      },
      {
        path: 'dashboards',
        component: DashboardsComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}


