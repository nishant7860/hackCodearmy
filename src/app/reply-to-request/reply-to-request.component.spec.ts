import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyToRequestComponent } from './reply-to-request.component';
import { TestModule } from '../test.module';

fdescribe('ReplyToRequestComponent', () => {
  let component: ReplyToRequestComponent;
  let fixture: ComponentFixture<ReplyToRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[TestModule],
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyToRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
