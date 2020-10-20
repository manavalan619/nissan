import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NissanLeafComponent } from './nissanleaf.component';

describe('NissanLeafComponent', () => {
  let component: NissanLeafComponent;
  let fixture: ComponentFixture<NissanLeafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NissanLeafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NissanLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});