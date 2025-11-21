import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-dialog-delete-todo',
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatSelectModule],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss',
})
export class DialogDeleteTodoComponent {
  protected data: Todo = inject(MAT_DIALOG_DATA);
}
