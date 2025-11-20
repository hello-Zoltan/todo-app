import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todo-content',
  imports: [],
  templateUrl: './todo-content.component.html',
  styleUrl: './todo-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoContentComponent {}
