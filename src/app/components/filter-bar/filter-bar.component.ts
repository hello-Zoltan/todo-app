import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-filter-bar',
  imports: [MatIconModule, FilterComponent],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss'
})
export class FilterBarComponent {
onFilterChange(event: string) {
  /* eslint-disable no-console */
  console.log('[FILTER BAR] Output from filter component: ', event);
}

}
