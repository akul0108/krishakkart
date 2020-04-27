import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustFeedbackComponent } from './cust-feedback.component';

describe('CustFeedbackComponent', () => {
  let component: CustFeedbackComponent;
  let fixture: ComponentFixture<CustFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
