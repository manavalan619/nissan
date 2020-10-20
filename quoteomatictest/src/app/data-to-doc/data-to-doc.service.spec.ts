import { TestBed } from '@angular/core/testing';

import { DataToDocService } from './data-to-doc.service';

describe('DataToDocService', () => {
  let service: DataToDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataToDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
