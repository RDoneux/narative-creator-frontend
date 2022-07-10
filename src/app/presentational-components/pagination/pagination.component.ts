import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() pageNumber: number | undefined = undefined;
  @Input() hasNextPage: boolean = false;
  @Input() hasPreviousPage: boolean = false;
  @Input() totalPages: number = 0;

  @Output() nextPage: EventEmitter<Event> = new EventEmitter();
  @Output() previousPage: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onNextPage(event: Event) {
    if (!this.hasNextPage) return;
    this.nextPage.emit(event);
  }

  onPreviousPage(event: Event) {
    if (!this.hasPreviousPage) return;
    this.previousPage.emit(event);
  }
}
