import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteTypeEntityComponent } from './quote-type-entity.component';

describe('QuoteTypeEntityComponent', () => {
  let component: QuoteTypeEntityComponent;
  let fixture: ComponentFixture<QuoteTypeEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteTypeEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteTypeEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
