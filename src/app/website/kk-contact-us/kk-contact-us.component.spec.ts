import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KkContactUsComponent } from './kk-contact-us.component';

describe('KkContactUsComponent', () => {
  let component: KkContactUsComponent;
  let fixture: ComponentFixture<KkContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KkContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KkContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
