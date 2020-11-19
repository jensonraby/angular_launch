import { TestBed } from '@angular/core/testing';

import { SpacepgmService } from './spacepgm.service';

describe('SpacepgmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpacepgmService = TestBed.get(SpacepgmService);
    expect(service).toBeTruthy();
  });
});
