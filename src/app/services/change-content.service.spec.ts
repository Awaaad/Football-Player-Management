import { TestBed } from '@angular/core/testing';

import { ChangeContentService } from './change-content.service';

describe('ChangeContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeContentService = TestBed.get(ChangeContentService);
    expect(service).toBeTruthy();
  });
});
