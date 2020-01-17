import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerBannerComponent } from './seller-banner.component';

describe('SellerBannerComponent', () => {
  let component: SellerBannerComponent;
  let fixture: ComponentFixture<SellerBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
