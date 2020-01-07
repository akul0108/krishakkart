import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TernsOfUseComponent } from './terns-of-use.component';

describe('TernsOfUseComponent', () => {
  let component: TernsOfUseComponent;
  let fixture: ComponentFixture<TernsOfUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TernsOfUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TernsOfUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
