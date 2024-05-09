import { TestBed } from '@angular/core/testing';

import { PackCrBackService } from './pack-cr-back.service';

describe('PackCrBackService', () => {
  let service: PackCrBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackCrBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
