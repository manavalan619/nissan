import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityGuideComponent } from './quality-guide.component';

describe('QualityGuideComponent', () => {
  let component: QualityGuideComponent;
  let fixture: ComponentFixture<QualityGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
