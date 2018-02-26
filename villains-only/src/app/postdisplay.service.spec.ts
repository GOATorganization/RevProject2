import { TestBed, inject } from '@angular/core/testing';

import { PostdisplayService } from './postdisplay.service';

describe('PostdisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostdisplayService]
    });
  });

  it('should be created', inject([PostdisplayService], (service: PostdisplayService) => {
    expect(service).toBeTruthy();
  }));
});
