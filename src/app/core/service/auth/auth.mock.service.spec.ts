import { TestBed, inject } from '@angular/core/testing';

import { AuthMockService } from './auth.mock.service';

describe('Service: AuthMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthMockService]
    });
  });

  it('should ...', inject([AuthMockService], (service: AuthMockService) => {
    expect(service).toBeTruthy();
  }));
});
