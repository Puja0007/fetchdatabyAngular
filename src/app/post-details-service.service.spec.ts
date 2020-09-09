import { TestBed } from '@angular/core/testing';

import { PostDetailsServiceService } from './post-details-service.service';

describe('PostDetailsServiceService', () => {
  let service: PostDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
