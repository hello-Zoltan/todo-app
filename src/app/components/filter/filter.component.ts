import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FilterType } from '../../models/filter.model';
import { NgTemplateOutlet } from '@angular/common';
import {
  BehaviorSubject,
  debounceTime,
  defer,
  distinctUntilChanged,
} from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-filter',
  imports: [MatIconModule, NgTemplateOutlet, MatButtonToggleModule, MatButtonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filterType = input<FilterType>('text');
  isTextFilter = computed(() => this.filterType() === 'text');
  isToggleFilter = computed(() => this.filterType() === 'toggle');

  private criteria$ = new BehaviorSubject<string>('');
  private delayedCriteria$ = defer(() => this.criteria$).pipe(
    takeUntilDestroyed(),
    distinctUntilChanged(),
    debounceTime(300)
  );

  filterChanged = outputFromObservable(this.delayedCriteria$);

  protected onTextFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.criteria$.next(value ?? '');
  }

  protected onToggleFilter(event: MatButtonToggleChange): void {
    const value = event.value;
    this.criteria$.next(value ?? '');
  }
}
