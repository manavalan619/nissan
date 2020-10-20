import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFbComponent } from './social-fb.component';

describe('SocialFbComponent', () => {
  let component: SocialFbComponent;
  let fixture: ComponentFixture<SocialFbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialFbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
