import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss'],
})
export class ImageSearchComponent {
  isLoading: boolean = false;

  data: any;

  @Output() imageSelected: EventEmitter<string> = new EventEmitter();

  constructor(private imageService: ImageService) {}

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
