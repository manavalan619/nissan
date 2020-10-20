import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { templateComponent } from './template.component';

describe('TemplateComponent', () => {
  let component: templateComponent;
  let fixture: ComponentFixture<templateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ templateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(templateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
