import { computed, Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.model';
import { INITIAL_TODOS } from '../utils/todo-data';
import { StateFilter } from '../models/filter.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly todosData = signal<Todo[]>(INITIAL_TODOS);

  readonly pageSize = signal(25).asReadonly();

  private readonly currentPage = signal(0);

  private readonly totalPages = computed(() =>
    Math.ceil(this.filteredTodos().length / this.pageSize())
  );

  private readonly allTodos = this.todosData.asReadonly();
  
  readonly filteredTodos = computed(() => {
    const allTodos = this.todosData();
    const stateFilter = this.stateFilter();
    const textFilter = this.textFilter().toLowerCase();

    return allTodos.filter((todo) => {
      const matchesState =
        stateFilter === 'all' ? true : todo.state === stateFilter;
      const matchesText = todo.content.toLowerCase().includes(textFilter);
      return matchesState && matchesText;
    });
  });

  private readonly stateFilter = signal<StateFilter>('all');
  private readonly textFilter = signal<string>('');

  readonly paginatedTodos = computed(() => { 
    const start = this.currentPage() * this.pageSize();
    const end = start + this.pageSize();
    return this.filteredTodos().slice(start, end);
  });

  goToPage(page: number): void {
    const total = this.totalPages();
    const newPage = Math.max(0, Math.min(page, total - 1));
    this.currentPage.set(newPage);
  }

  setTextFilter(filter: string): void {
    this.textFilter.set(filter);
    this.currentPage.set(0);
  }

  setStateFilter(state: StateFilter): void {
    this.stateFilter.set(state);
    this.currentPage.set(0);
  }
}
