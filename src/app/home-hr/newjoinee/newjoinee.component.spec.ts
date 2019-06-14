import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJoineeComponent } from './newjoinee.component';
import { TestModule } from 'src/app/test.module';

describe('NewjoineeComponent', () => {
  let component: NewJoineeComponent;
  let fixture: ComponentFixture<NewJoineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[TestModule],
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJoineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
