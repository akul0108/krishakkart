import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustPaymentsComponent } from './cust-payments.component';

describe('CustPaymentsComponent', () => {
  let component: CustPaymentsComponent;
  let fixture: ComponentFixture<CustPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
