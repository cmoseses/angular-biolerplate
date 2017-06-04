import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {DashboardsComponent} from './dashboards.component';
import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';
import {ChartModule} from 'angular2-highcharts';
import {highchartsFactory} from '../app.module';
import {LogService} from '../services/log.service';

describe('DashboardsComponent', () => {
  let component: DashboardsComponent;
  let fixture: ComponentFixture<DashboardsComponent>;
  const LogServiceStub = {
    getLogs: () => Observable.of([]),
    getLogItems: () => Observable.of([]),
    getDistinctLogLevels: () => Observable.of([])
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardsComponent],
      imports: [ChartModule],
      providers: [
        {
          provide: HighchartsStatic,
          useFactory: highchartsFactory
        }, {provide: LogService, useValue: LogServiceStub},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
