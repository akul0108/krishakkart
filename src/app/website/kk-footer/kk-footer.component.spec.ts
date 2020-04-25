import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KkFooterComponent } from './kk-footer.component';

describe('KkFooterComponent', () => {
  let component: KkFooterComponent;
  let fixture: ComponentFixture<KkFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KkFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KkFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
