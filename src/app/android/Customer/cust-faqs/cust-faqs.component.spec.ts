import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustFaqsComponent } from './cust-faqs.component';

describe('CustFaqsComponent', () => {
  let component: CustFaqsComponent;
  let fixture: ComponentFixture<CustFaqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustFaqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
