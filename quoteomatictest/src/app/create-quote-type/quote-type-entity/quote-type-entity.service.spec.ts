import { TestBed } from '@angular/core/testing';

import { QuoteTypeEntityService } from './quote-type-entity.service';

describe('QuoteTypeEntityService', () => {
  let service: QuoteTypeEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteTypeEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
