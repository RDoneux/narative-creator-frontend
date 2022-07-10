import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-character-modal-image-view',
  templateUrl: './character-modal-image-view.component.html',
  styleUrls: ['./character-modal-image-view.component.scss'],
})
export class CharacterModalImageViewComponent implements OnInit {
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

  ngOnInit(): void {}

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
