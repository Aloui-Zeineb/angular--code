import { TestBed } from '@angular/core/testing';

import { KindergartenFormService } from './kindergarten-form.service';

describe('KindergartenFormService', () => {
  let service: KindergartenFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KindergartenFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
