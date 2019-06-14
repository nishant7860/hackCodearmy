import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayResponseComponent } from './display-response.component';
import { TestModule } from '../test.module';

describe('DisplayResponseComponent', () => {
  let component: DisplayResponseComponent;
  let fixture: ComponentFixture<DisplayResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[TestModule],
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
