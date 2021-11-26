import { TestBed } from '@angular/core/testing';

import { ConfigDiaryService } from './config-diary.service';

describe('ConfigDiaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigDiaryService = TestBed.get(ConfigDiaryService);
    expect(service).toBeTruthy();
  });
});
