import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {HomeContentComponent} from '../home-content/home-content.component';
import {DashboardsComponent} from '../dashboards/dashboards.component';
import {AuthGuardService} from '../services/auth-guard.service';


const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeContentComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'home-content',
        component: HomeContentComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'dashboards',
        component: DashboardsComponent,
        canActivate: [AuthGuardService]
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


