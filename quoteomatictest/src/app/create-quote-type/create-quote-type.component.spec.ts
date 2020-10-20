import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuoteTypeComponent } from './create-quote-type.component';

describe('CreateQuoteTypeComponent', () => {
  let component: CreateQuoteTypeComponent;
  let fixture: ComponentFixture<CreateQuoteTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuoteTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuoteTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
