import { TestBed } from '@angular/core/testing';

import { GarantBackService } from './garant-back.service';

describe('GarantBackService', () => {
  let service: GarantBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarantBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
