import { Component, inject, signal } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-dashboard',
  imports: [FilterBarComponent, TodoListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  todoService = inject(TodoService);
}
