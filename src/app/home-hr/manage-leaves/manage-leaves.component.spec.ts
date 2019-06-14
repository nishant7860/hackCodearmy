import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLeavesComponent } from './manage-leaves.component';
import { TestModule } from 'src/app/test.module';

describe('ManageLeavesComponent', () => {
  let component: ManageLeavesComponent;
  let fixture: ComponentFixture<ManageLeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[TestModule],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
