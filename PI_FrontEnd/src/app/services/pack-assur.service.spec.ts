import { TestBed } from '@angular/core/testing';

import { PackAssurService } from './pack-assur.service';

describe('PackAssurService', () => {
  let service: PackAssurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackAssurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
