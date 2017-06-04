import {TestBed, async, inject} from '@angular/core/testing';
import {AuthService} from './auth.service';
import {HttpModule} from '@angular/http';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpModule]
    });
  });

  it('should be defined', inject([AuthService], (service: AuthService) => {
    expect(service).toBeDefined();
  }));
});
