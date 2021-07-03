import { TestBed } from '@angular/core/testing';

import { WardsService } from './wards.service';

describe('WardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WardsService = TestBed.get(WardsService);
    expect(service).toBeTruthy();
  });
});
