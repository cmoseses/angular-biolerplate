import {TestBed, async, inject} from '@angular/core/testing';
import {HttpModule} from '@angular/http';

import {LogService} from './log.service';

describe('LogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogService],
      imports: [HttpModule]
    });
  });

  it('should exits', inject([LogService], (service: LogService) => {
    expect(service).toBeTruthy();
  }));
});
