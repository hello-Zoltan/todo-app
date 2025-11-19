import { Component, input } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoItemMode } from '../../models/todo-item.model';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  readonly todo = input.required<Todo>();
  readonly mode = input<TodoItemMode>('view');
}
