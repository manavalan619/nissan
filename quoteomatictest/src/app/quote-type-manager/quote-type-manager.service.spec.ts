import { TestBed } from '@angular/core/testing';

import { QuoteTypeManagerService } from './quote-type-manager.service';

describe('QuoteTypeManagerService', () => {
  let service: QuoteTypeManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteTypeManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
