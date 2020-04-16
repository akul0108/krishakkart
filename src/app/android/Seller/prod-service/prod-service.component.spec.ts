import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdServiceComponent } from './prod-service.component';

describe('ProdServiceComponent', () => {
  let component: ProdServiceComponent;
  let fixture: ComponentFixture<ProdServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
