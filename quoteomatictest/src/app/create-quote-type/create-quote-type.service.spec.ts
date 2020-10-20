import { TestBed } from '@angular/core/testing';

import { CreateQuoteTypeService } from './create-quote-type.service';

describe('CreateQuoteTypeService', () => {
  let service: CreateQuoteTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateQuoteTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
