import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ImageService } from './image.service';


describe('ImageService', () => {
  let service: ImageService;
  let httpMock: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpMock }],
    });    service = TestBed.inject(ImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
