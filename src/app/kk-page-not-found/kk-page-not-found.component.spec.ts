import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KkPageNotFoundComponent } from './kk-page-not-found.component';

describe('KkPageNotFoundComponent', () => {
  let component: KkPageNotFoundComponent;
  let fixture: ComponentFixture<KkPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KkPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KkPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
