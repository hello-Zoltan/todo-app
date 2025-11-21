import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { PagingComponent } from '../paging/paging.component';
import { TextFilterComponent } from '../text-filter/text-filter.component';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { StateFilterComponent } from '../state-filter/state-filter.component';
import { StateFilter } from '../../models/filter.model';
import { HeaderComponent } from '../header/header.component';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-dashboard',
  imports: [
    TodoListComponent,
    PagingComponent,
    TextFilterComponent,
    FilterBarComponent,
    StateFilterComponent,
    HeaderComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  protected readonly todoService = inject(TodoService);

  protected readonly todoTitle = signal('Todo Application');

  protected onPageTo(event: number): void {
    this.todoService.goToPage(event);
  }

  protected onTextFilterChanged(event: string): void {
    this.todoService.setTextFilter(event);
  }

  protected onStateFilterChanged(event: StateFilter): void {
    this.todoService.setStateFilter(event);
  }

  protected onCreateTodo(newTodo: Todo): void {
    this.todoService.addTodo(newTodo);
  }

  protected onChangeTodo(changedTodo: Todo): void {
    this.todoService.changeTodo(changedTodo);
  }

  protected onDeleteTodo(todoToDelete: Todo): void {
    this.todoService.deleteTodo(todoToDelete);
  }
}
