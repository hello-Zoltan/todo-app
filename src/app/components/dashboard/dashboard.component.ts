import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { PagingComponent } from '../paging/paging.component';
import { TextFilterComponent } from '../text-filter/text-filter.component';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { StateFilterComponent } from '../state-filter/state-filter.component';
import { StateFilter } from '../../models/filter.model';

@Component({
  selector: 'app-dashboard',
  imports: [
    TodoListComponent,
    PagingComponent,
    TextFilterComponent,
    FilterBarComponent,
    StateFilterComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  protected readonly todoService = inject(TodoService);

  protected onPageTo(event: number): void {
    this.todoService.goToPage(event);
  }

  protected onTextFilterChanged(event: string): void {
    this.todoService.setTextFilter(event);
  }
  
  protected onStateFilterChanged(event: StateFilter): void {
    this.todoService.setStateFilter(event);
  }
}
