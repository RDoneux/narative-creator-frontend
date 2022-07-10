import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-search-display',
  templateUrl: './image-search-display.component.html',
  styleUrls: ['./image-search-display.component.scss'],
})
export class ImageSearchDisplayComponent {
  @Input() sourceUrls: any | undefined = undefined;
  @Input() pageNumber: number | undefined = undefined;
  @Input() hasNextPage: boolean = false;
  @Input() hasPreviousPage: boolean = false;
  @Input() totalPages: number = 0;

  @Output() nextPage: EventEmitter<Event> = new EventEmitter();
  @Output() previousPage: EventEmitter<Event> = new EventEmitter();
  @Output() imageClicked: EventEmitter<string> = new EventEmitter();

  totalPagesRounded: number = 0;

  constructor() {}

  ngOnChanges() {
    this.totalPagesRounded = Math.round(this.totalPages);
  }

  onNextPage(event: Event) {
    if (!this.hasNextPage) return;
    this.nextPage.emit(event);
  }

  onPreviousPage(event: Event) {
    if (!this.hasPreviousPage) return;
    this.previousPage.emit(event);
  }

  onImageClick(url: string) {
    this.imageClicked.emit(url);
  }
}
