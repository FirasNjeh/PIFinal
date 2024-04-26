import { TestBed } from '@angular/core/testing';

import { GarantFrontService } from './garant-front.service';

describe('GarantFrontService', () => {
  let service: GarantFrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarantFrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
