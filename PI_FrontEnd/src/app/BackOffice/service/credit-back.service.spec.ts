import { TestBed } from '@angular/core/testing';

import { CreditBackService } from './credit-back.service';

describe('CreditFrontService', () => {
  let service: CreditBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
