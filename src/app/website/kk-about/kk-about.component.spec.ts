import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KkAboutComponent } from './kk-about.component';

describe('KkAboutComponent', () => {
  let component: KkAboutComponent;
  let fixture: ComponentFixture<KkAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KkAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KkAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
