import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatConfirmDialogComponent } from './mat-confirm-dialog.component';
import { TestModule } from '../test.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';



describe('MatConfirmDialogComponent', () => {
  let component: MatConfirmDialogComponent;
  let fixture: ComponentFixture<MatConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[TestModule],
      providers: [ { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(MatConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });




  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
