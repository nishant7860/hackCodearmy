import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoomePmComponent } from './hoome-pm.component';

describe('HoomePmComponent', () => {
  let component: HoomePmComponent;
  let fixture: ComponentFixture<HoomePmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoomePmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoomePmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
