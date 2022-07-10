import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.scss'],
})
export class CharacterCreatorComponent implements OnInit {
  thumbNailUrl: string = '/assets/icons/male-default.jpg';

  pageTitle: string = 'Character Creator';
  showModal: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onCloseModal() {
    this.showModal = false;
  }

  onChangeCharacterThumbnail(event: Event) {
    this.showModal = true;
  }

  onImageChanged(url: string) {
    this.onCloseModal();
    this.thumbNailUrl = url;
  }
}
