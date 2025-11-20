import { Component, input, output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paging',
  imports: [MatPaginatorModule],
  templateUrl: './paging.component.html',
  styleUrl: './paging.component.scss',
})
export class PagingComponent {
  readonly pageLength = input.required<number>();
  readonly pageSize = input<number>(25);
  readonly pageTo = output<number>();

  protected onPaging(event: PageEvent): void {
    /* eslint-disable no-console */
    console.log('page event: ', event);
    this.pageTo.emit(event.pageIndex);
  }
}
