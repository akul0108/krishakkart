import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KkRecognizeComponent } from './kk-recognize.component';

describe('KkRecognizeComponent', () => {
  let component: KkRecognizeComponent;
  let fixture: ComponentFixture<KkRecognizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KkRecognizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KkRecognizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
