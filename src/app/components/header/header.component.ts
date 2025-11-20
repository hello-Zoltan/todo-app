import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { DialogService } from '../../services/dialog.service';
import { Todo, TodoState } from '../../models/todo.model';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatToolbarModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  dialogService = inject(DialogService);

  readonly title = input.required<string>();
  readonly changedTodo = output<Todo>();

  protected addNewTodo(): void {
    const dialogRef = this.dialogService.openDialog({
      type: 'add',
    });

    dialogRef
      .afterClosed()
      .subscribe((result: Todo) => {
        this.changedTodo.emit(result);
      });
  }
}
