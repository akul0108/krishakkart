import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KkNetworkComponent } from './kk-network.component';

describe('KkNetworkComponent', () => {
  let component: KkNetworkComponent;
  let fixture: ComponentFixture<KkNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KkNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KkNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
