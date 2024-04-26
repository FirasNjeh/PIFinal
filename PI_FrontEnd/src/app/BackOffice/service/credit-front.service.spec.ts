import { TestBed } from '@angular/core/testing';

import { CreditFrontService } from './credit-front.service';

describe('CreditFrontService', () => {
  let service: CreditFrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditFrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
