import { TestBed } from '@angular/core/testing';

import { PackCrFrontService } from './pack-cr-front.service';

describe('PackCrFrontService', () => {
  let service: PackCrFrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackCrFrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
