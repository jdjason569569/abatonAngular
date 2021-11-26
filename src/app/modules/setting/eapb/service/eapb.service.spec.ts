import { TestBed } from '@angular/core/testing';

import { EapbService } from './eapb.service';

describe('EapbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EapbService = TestBed.get(EapbService);
    expect(service).toBeTruthy();
  });
});
