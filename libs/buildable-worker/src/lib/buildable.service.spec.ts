import { TestBed } from '@angular/core/testing';

import { BuildableService } from './buildable.service';

describe('BuildableService', () => {
  let service: BuildableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
