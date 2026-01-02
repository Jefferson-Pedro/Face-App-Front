import { TestBed } from '@angular/core/testing';

import { FaceServiceService } from './face-service.service';

describe('FaceServiceService', () => {
  let service: FaceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
