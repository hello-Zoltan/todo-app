import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ModificationDialogDataInput } from '../../models/dialog.model';
import { FormsModule, NgForm } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { Todo, TodoState } from '../../models/todo.model';
import { generateUniqueId } from '../../utils/id-generation-util';

@Component({
  selector: 'app-change-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
  ],
  templateUrl: './change-dialog.component.html',
  styleUrl: './change-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        subscriptSizing: 'dynamic',
      },
    },
  ],
})
export class DialogChangeTodoComponent {
  private dialogRef: MatDialogRef<DialogChangeTodoComponent> = inject(MatDialogRef);
  protected data: ModificationDialogDataInput = inject(MAT_DIALOG_DATA);
  
  protected readonly selectedState: TodoState = 'open';

  protected onSubmit(form: NgForm): void {
    const returnValue = this.data.type === 'add' ? this.createTodo(form.value): null;
    this.dialogRef.close(returnValue);
  }

  private createTodo(inputs: {content: string, state: TodoState}): Todo {
    return {
      index: -1,
      uuid: generateUniqueId(),
      content: inputs.content,
      state: inputs.state
    }
  }
}
