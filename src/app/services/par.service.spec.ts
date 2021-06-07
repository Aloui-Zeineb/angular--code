import { TestBed } from '@angular/core/testing';

import { ParService } from './par.service';

describe('ParService', () => {
  let service: ParService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
