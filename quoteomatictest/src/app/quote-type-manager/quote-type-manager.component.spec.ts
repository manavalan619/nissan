import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteTypeManagerComponent } from './quote-type-manager.component';

describe('QuoteTypeManagerComponent', () => {
  let component: QuoteTypeManagerComponent;
  let fixture: ComponentFixture<QuoteTypeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteTypeManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteTypeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
