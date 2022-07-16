import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-character-thumbnail',
  templateUrl: './character-thumbnail.component.html',
  styleUrls: ['./character-thumbnail.component.scss'],
})
export class CharacterThumbnailComponent {
  @Input() source: string | undefined = undefined;
  @Input() altText: string | undefined = 'Image not found';
  @Input() position: string | undefined = undefined;
  @Input() width: string | undefined = undefined;
  @Input() height: string | undefined = undefined;

  @Output() buttonClicked: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  onButtonClick(event: Event) {
    this.buttonClicked.emit(event);
  }
}
