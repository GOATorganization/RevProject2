import { TestBed, inject } from '@angular/core/testing';

import { DisplaypicService } from './displaypic.service';

describe('DisplaypicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplaypicService]
    });
  });

  it('should be created', inject([DisplaypicService], (service: DisplaypicService) => {
    expect(service).toBeTruthy();
  }));
});
