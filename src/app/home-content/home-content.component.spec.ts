import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {HomeContentComponent} from './home-content.component';
import {LogService} from '../services/log.service';
import {GirdModule} from '../gird/gird.module';

describe('HomeContentComponent', () => {
  let component: HomeContentComponent;
  let fixture: ComponentFixture<HomeContentComponent>;
  const LogServiceStub = {getLogs: () => Observable.of([])};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeContentComponent],
      providers: [
        {provide: LogService, useValue: LogServiceStub},
      ],
      imports: [GirdModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
