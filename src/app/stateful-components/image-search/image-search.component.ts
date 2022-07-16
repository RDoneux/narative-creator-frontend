import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss'],
})
export class ImageSearchComponent {
  isLoading: boolean = false;
  data: any = undefined;
  database: 'Art Station' | 'Pexels' = 'Art Station';
  databaseOptions: string[] = ['Art Station', 'Pexels'];
  pageNumber: number = 1;
  searchTerm: string = '';

  @Output() imageSelected: EventEmitter<string> = new EventEmitter();

  constructor(private imageService: ImageService) {}

  onSearchTermChanged(event: string) {
    this.isLoading = true;
    this.searchTerm = event;
    this.pageNumber = 1;
    switch (this.database) {
      case 'Pexels':
        this.imageService.searchPexels([event]).subscribe((data: any) => {
          this.data = data;
          this.isLoading = false;
        });
        break;
      case 'Art Station':
        this.imageService
          .searchArtStationProxy([event], this.pageNumber, 15)
          .subscribe((data: any) => {
            this.data = this.convertArtStationObject(data, this.pageNumber);
            this.isLoading = false;
          });
        break;
    }
  }

  onNextPage(event: Event) {
    this.pageNumber++;
    switch (this.database) {
      case 'Pexels':
        this.imageService.changePage(this.data.next_page).subscribe((data) => {
          this.data = data;
        });
        break;
      case 'Art Station':
        this.imageService
          .searchArtStationProxy([this.searchTerm], this.pageNumber, 15)
          .subscribe((data: any) => {
            this.data = this.convertArtStationObject(data, this.pageNumber);
            this.isLoading = false;
          });
        break;
    }
  }

  onPreviousPage(event: Event) {
    this.pageNumber--;
    switch (this.database) {
      case 'Pexels':
        this.imageService.changePage(this.data.prev_page).subscribe((data) => {
          this.data = data;
        });
        break;
      case 'Art Station':
        this.imageService
          .searchArtStationProxy([this.searchTerm], this.pageNumber, 15)
          .subscribe((data: any) => {
            this.data = this.convertArtStationObject(data, this.pageNumber);
            this.isLoading = false;
          });
        break;
    }
  }

  onImageClicked(url: string) {
    this.imageSelected.emit(url);
  }

  convertArtStationObject(data: any, pageNumber: number) {
    var images: any = {};
    images.photos = [];
    images.page = pageNumber;
    images.per_page = 15;
    images.total_results = data.total_count;
    images.next_page = data.total_count > 0 ? true : undefined;
    images.prev_page = undefined;
    data.data.forEach((item: any) => {
      images.photos.push({
        src: { large: item.smaller_square_cover_url },
      });
    });
    return images;
  }
}
