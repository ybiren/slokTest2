import { TestBed } from '@angular/core/testing';

import { SlokotoService } from './slokoto.service';

describe('SlokotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlokotoService = TestBed.get(SlokotoService);
    expect(service).toBeTruthy();
  });
});
