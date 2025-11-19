import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.model';
import { INITIAL_TODOS } from '../utils/todo-data';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly todosData = signal<Todo[]>(INITIAL_TODOS);
  readonly todos = this.todosData.asReadonly();
}
