import { TestBed } from '@angular/core/testing';

import { MpFrontService } from './mp-front.service';

describe('MpFrontService', () => {
  let service: MpFrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpFrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
