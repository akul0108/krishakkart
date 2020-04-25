import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KkBannerComponent } from './kk-banner.component';

describe('KkBannerComponent', () => {
  let component: KkBannerComponent;
  let fixture: ComponentFixture<KkBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KkBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KkBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
