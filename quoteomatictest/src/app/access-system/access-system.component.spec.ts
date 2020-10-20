import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSystemComponent } from './access-system.component';

describe('AccessSystemComponent', () => {
  let component: AccessSystemComponent;
  let fixture: ComponentFixture<AccessSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
