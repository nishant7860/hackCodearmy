import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHrComponent } from './home-hr.component';
import { TestModule } from '../test.module';

describe('HomeHrComponent', () => {
  let component: HomeHrComponent;
  let fixture: ComponentFixture<HomeHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[TestModule],
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
