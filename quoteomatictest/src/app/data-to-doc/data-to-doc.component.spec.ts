import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataToDocComponent } from './data-to-doc.component';

describe('DataToDocComponent', () => {
  let component: DataToDocComponent;
  let fixture: ComponentFixture<DataToDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataToDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataToDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
