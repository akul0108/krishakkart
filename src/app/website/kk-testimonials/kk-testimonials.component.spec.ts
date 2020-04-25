import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KkTestimonialsComponent } from './kk-testimonials.component';

describe('KkTestimonialsComponent', () => {
  let component: KkTestimonialsComponent;
  let fixture: ComponentFixture<KkTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KkTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KkTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
