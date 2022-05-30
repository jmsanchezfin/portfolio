import { TestBed } from '@angular/core/testing';

import { HttpClientAboutService } from './http-client-about.service';

describe('HttpClientAboutService', () => {
  let service: HttpClientAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
