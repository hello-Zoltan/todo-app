import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogChangeTodoComponent } from '../components/change-dialog/change-dialog.component';
import { ModificationDialogDataInput } from '../models/dialog.model';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private readonly dialog = inject(MatDialog);

  openDialog(
    data: ModificationDialogDataInput
  ): MatDialogRef<DialogChangeTodoComponent, any> {
    const dialogRef = this.dialog.open(DialogChangeTodoComponent, {
      height: '360px',
      width: '360px',
      data: data
    });

    return dialogRef;
  }
}
