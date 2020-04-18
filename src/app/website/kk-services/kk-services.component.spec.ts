import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KkServicesComponent } from './kk-services.component';

describe('KkServicesComponent', () => {
  let component: KkServicesComponent;
  let fixture: ComponentFixture<KkServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KkServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KkServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
