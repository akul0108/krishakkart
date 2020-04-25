import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KkProductsComponent } from './kk-products.component';

describe('KkProductsComponent', () => {
  let component: KkProductsComponent;
  let fixture: ComponentFixture<KkProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KkProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KkProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
