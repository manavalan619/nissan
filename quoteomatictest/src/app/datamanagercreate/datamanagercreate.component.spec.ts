import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamanagercreateComponent } from './datamanagercreate.component';

describe('DatamanagercreateComponent', () => {
  let component: DatamanagercreateComponent;
  let fixture: ComponentFixture<DatamanagercreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamanagercreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamanagercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});