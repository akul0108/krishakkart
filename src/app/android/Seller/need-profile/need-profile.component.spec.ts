import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedProfileComponent } from './need-profile.component';

describe('NeedProfileComponent', () => {
  let component: NeedProfileComponent;
  let fixture: ComponentFixture<NeedProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
