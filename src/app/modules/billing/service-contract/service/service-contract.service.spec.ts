import { TestBed } from '@angular/core/testing';

import { ServiceContractService } from './service-contract.service';

describe('ServiceContractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceContractService = TestBed.get(ServiceContractService);
    expect(service).toBeTruthy();
  });
});
