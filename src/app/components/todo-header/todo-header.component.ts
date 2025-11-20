import { Component, computed, input } from '@angular/core';
import { TodoState } from '../../models/todo.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-header',
  imports: [MatIconModule],
  templateUrl: './todo-header.component.html',
  styleUrl: './todo-header.component.scss',
  host: {
    '[class]': 'hostClasses()',
  },
})
export class TodoHeaderComponent {
  readonly title = input.required<string>();
  readonly state = input.required<TodoState>();

  protected readonly stateIcon = computed(() =>
    this.state() === 'open' ? 'pending_actions' : 'task'
  );

  protected readonly hostClasses = computed(() => {
    return `todo-header--${this.state()}`;
  });
}
