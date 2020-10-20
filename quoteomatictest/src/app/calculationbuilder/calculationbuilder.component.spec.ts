import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationbuilderComponent } from './calculationbuilder.component';

describe('CalculationbuilderComponent', () => {
  let component: CalculationbuilderComponent;
  let fixture: ComponentFixture<CalculationbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
