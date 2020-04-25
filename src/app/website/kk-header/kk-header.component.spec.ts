import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KkHeaderComponent } from './kk-header.component';

describe('KkHeaderComponent', () => {
  let component: KkHeaderComponent;
  let fixture: ComponentFixture<KkHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KkHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
