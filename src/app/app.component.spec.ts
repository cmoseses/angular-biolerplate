import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home/home.module';
import {LoginModule} from './login/login.module';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';
import {NotFoundModule} from './not-found/not-found.module';
import {DashboardsModule} from './dashboards/dashboards.module';
import {HomeContentModule} from './home-content/home-content.module';
import {GirdModule} from './gird/gird.module';
import {DropdownModule} from './dropdown/dropdown.module';
import {ChartModule} from 'angular2-highcharts';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        ChartModule.forRoot(require('highcharts')),
        LoginModule,
        NotFoundModule,
        GirdModule,
        DropdownModule,
        HomeContentModule,
        HomeModule,
        DynamicFormModule,
        DashboardsModule,
        AppRoutingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
