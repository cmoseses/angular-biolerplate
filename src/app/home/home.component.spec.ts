import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {ServicesModule} from '../services/services.module';
import {RouterTestingModule} from '@angular/router/testing';
import {User} from '../models/user.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const userStub: User = {userid: '23', password: 'x'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.currentUser = userStub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
