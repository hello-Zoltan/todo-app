import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChangeTodoComponent } from './change-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('DialogChangeTodoComponent', () => {
  let component: DialogChangeTodoComponent;
  let fixture: ComponentFixture<DialogChangeTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogChangeTodoComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogChangeTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
