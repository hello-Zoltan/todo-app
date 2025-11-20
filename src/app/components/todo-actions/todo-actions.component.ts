import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-actions',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './todo-actions.component.html',
  styleUrl: './todo-actions.component.scss',
})
export class TodoActionsComponent {
  onEdit() {
  }
  onDelete() {
  }
}
