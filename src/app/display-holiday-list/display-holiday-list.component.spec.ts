import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHolidayListComponent } from './display-holiday-list.component';
import { TestModule } from '../test.module';

describe('DisplayHolidayListComponent', () => {
  let component: DisplayHolidayListComponent;
  let fixture: ComponentFixture<DisplayHolidayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[TestModule],
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHolidayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
