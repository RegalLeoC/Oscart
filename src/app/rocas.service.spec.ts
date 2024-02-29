import { TestBed } from '@angular/core/testing';

import { RocasService } from './rocas.service';

describe('RocasService', () => {
  let service: RocasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
