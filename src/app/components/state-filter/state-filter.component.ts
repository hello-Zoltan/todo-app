import { Component, output } from '@angular/core';
import {
  MatButtonToggleChange,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { StateFilter } from '../../models/filter.model';

@Component({
  selector: 'app-state-filter',
  imports: [MatButtonToggleModule],
  templateUrl: './state-filter.component.html',
  styleUrl: './state-filter.component.scss',
})
export class StateFilterComponent {
  readonly stateFilter = output<StateFilter>();

  protected onStateFilter(event: MatButtonToggleChange): void {
    this.stateFilter.emit(event.value);
  }
}
