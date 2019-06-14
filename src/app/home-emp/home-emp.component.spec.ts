import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEmpComponent } from './home-emp.component';
import { TestModule } from '../test.module';

describe('HomeEmpComponent', () => {
  let component: HomeEmpComponent;
  let fixture: ComponentFixture<HomeEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[TestModule],
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
