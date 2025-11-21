import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogChangeTodoComponent } from '../components/change-dialog/change-dialog.component';
import { ModificationDialogDataInput } from '../models/dialog.model';
import { DialogDeleteTodoComponent } from '../components/delete-dialog/delete-dialog.component';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private readonly dialog = inject(MatDialog);

  openModificationDialog(
    data: ModificationDialogDataInput
  ): MatDialogRef<DialogChangeTodoComponent> {
    const dialogRef = this.dialog.open(DialogChangeTodoComponent, {
      height: '360px',
      width: '360px',
      data: data,
    });

    return dialogRef;
  }

  openDeleteDialog(todo: Todo): MatDialogRef<DialogDeleteTodoComponent> {
    const dialogRef = this.dialog.open(DialogDeleteTodoComponent, {
      height: '250px',
      width: '200px',
      data: todo
    });

    return dialogRef;
  }
}
