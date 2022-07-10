import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-character-creator-modal',
  templateUrl: './character-creator-modal.component.html',
  styleUrls: ['./character-creator-modal.component.scss'],
})
export class CharacterCreatorModalComponent implements OnInit {
  isLoading: boolean = false;

  data: any;

  @Output() imageSelected: EventEmitter<string> = new EventEmitter();

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}

  onSearchTermChanged(event: string) {
    this.isLoading = true;
    this.imageService.search([event]).subscribe((data: any) => {
      this.data = data;
      this.isLoading = false;
    });
  }

  onNextPage(event: Event) {
    this.imageService.changePage(this.data.next_page).subscribe((data) => {
      this.data = data;
    });
  }

  onPreviousPage(event: Event) {
    this.imageService.changePage(this.data.prev_page).subscribe((data) => {
      this.data = data;
    });
  }

  onImageClicked(url: string) {
    this.imageSelected.emit(url);
  }
}
