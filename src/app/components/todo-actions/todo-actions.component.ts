import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-actions',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './todo-actions.component.html',
  styleUrl: './todo-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoActionsComponent {
  readonly editTodo = output<void>();
  readonly deleteTodo = output<void>();
  
  protected onEdit(): void {
    this.editTodo.emit();
  }

  protected onDelete(): void {
    this.deleteTodo.emit();
  }
}
