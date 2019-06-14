import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLeaveComponentComponent } from './apply-leave-component.component';

describe('ApplyLeaveComponentComponent', () => {
  let component: ApplyLeaveComponentComponent;
  let fixture: ComponentFixture<ApplyLeaveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyLeaveComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyLeaveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
