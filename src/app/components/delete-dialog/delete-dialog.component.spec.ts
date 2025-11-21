import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteTodoComponent } from './delete-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('DialogDeleteTodoComponent', () => {
  let component: DialogDeleteTodoComponent;
  let fixture: ComponentFixture<DialogDeleteTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDeleteTodoComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: [] },
        provideExperimentalZonelessChangeDetection()
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
