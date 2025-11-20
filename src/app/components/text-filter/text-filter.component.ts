import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-text-filter',
  imports: [MatIconModule, FormsModule, MatButtonModule],
  templateUrl: './text-filter.component.html',
  styleUrl: './text-filter.component.scss',
})
export class TextFilterComponent {
  readonly textFilter = output<string>();

  protected onInputChange(input: string): void {
    this.textFilter.emit(input);
  }

  protected resetFilter(): void {
    this.textFilter.emit('');
  }
}
