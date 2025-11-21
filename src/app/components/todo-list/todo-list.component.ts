import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../../services/todo.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  
  protected readonly todoService = inject(TodoService);
  protected readonly dialogService = inject(DialogService);
  
  readonly todos = input.required<Todo[]>();
  readonly changeTodo = output<Todo>();

  protected onEditTodo(todoToEdit: Todo): void {
    const dialogRef = this.dialogService.openDialog({
      type: 'edit',
      todo: todoToEdit
    });

    dialogRef
      .afterClosed()
      .subscribe((changedTodo: Todo) => {
        if (changedTodo) {
          this.changeTodo.emit(changedTodo);
        }
      });
  }
}
