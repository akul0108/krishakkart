import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingClosureComponent } from './booking-closure.component';

describe('BookingClosureComponent', () => {
  let component: BookingClosureComponent;
  let fixture: ComponentFixture<BookingClosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingClosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
