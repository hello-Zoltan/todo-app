import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoItemMode } from '../../models/todo-item.model';
import { TodoHeaderComponent } from '../todo-header/todo-header.component';
import { TodoContentComponent } from '../todo-content/todo-content.component';
import { TodoActionsComponent } from '../todo-actions/todo-actions.component';

@Component({
  selector: 'app-todo-item',
  imports: [TodoHeaderComponent, TodoContentComponent, TodoActionsComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  readonly todo = input.required<Todo>();
  readonly editTodo = output<Todo>()

  protected onEditTodo(): void {
    this.editTodo.emit(this.todo());
  }
}
