import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketScreenComponent } from './ticket-screen.component';

describe('TicketScreenComponent', () => {
  let component: TicketScreenComponent;
  let fixture: ComponentFixture<TicketScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
