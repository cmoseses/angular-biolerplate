import {TestBed, async, inject} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {AuthGuardService} from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService],
      imports: [RouterTestingModule]
    });
  });

  it('should ...', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
