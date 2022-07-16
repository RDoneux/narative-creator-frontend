import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ComponentsComponent } from 'src/app/components/components.component';
import { ApiService } from 'src/app/services/api/api.service';

import { ImageSearchComponent } from './image-search.component';
import { ImageService } from './image.service';

describe('ImageSearchComponent', () => {
  let component: ImageSearchComponent;
  let fixture: ComponentFixture<ImageSearchComponent>;
  let imageServiceMock: any;

  const testData: any = {
    total_count: 22,
    data: [
      {
        id: 13050320,
        hash_id: 'mzwvBv',
        url: 'https://www.artstation.com/artwork/mzwvBv',
        smaller_square_cover_url:
          'https://cdnb.artstation.com/p/assets/covers/images/050/568/113/smaller_square/luis-silva-luis-silva-rooted-waterfall-title.jpg?1655161203',
        hide_as_adult: false,
        title: 'Rooted Waterfall - Personal Project',
        icons: {
          video: false,
          image: true,
          model3d: false,
          marmoset: false,
          pano: false,
          multiple_images: true,
          video_clip: false,
        },
        user: {
          id: 742135,
          username: 'luisarts',
          medium_avatar_url:
            'https://cdnb.artstation.com/p/users/avatars/000/742/135/medium/e33850b44dbb8584bff49d56bc816626.jpg?1652897754',
          is_staff: false,
          pro_member: false,
          is_plus_member: false,
          is_studio_account: false,
          is_school_account: false,
          full_name: 'Luis Silva',
        },
      },
    ],
  };

  const expectedResult: any = {
    photos: [
      {
        src: {
          large:
            'https://cdnb.artstation.com/p/assets/covers/images/050/568/113/smaller_square/luis-silva-luis-silva-rooted-waterfall-title.jpg?1655161203',
        },
      },
    ],
    page: 1,
    per_page: 15,
    total_results: 22,
    next_page: true,
    prev_page: undefined,
  };

  beforeEach(async () => {
    imageServiceMock = jasmine.createSpyObj('ImageService', [
      'searchPexels',
      'searchArtStationProxy',
      'changePage',
    ]);
    await TestBed.configureTestingModule({
      declarations: [ImageSearchComponent],
      providers: [{ provide: ImageService, useValue: imageServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test default values', () => {
    expect(component.isLoading).toBeFalse();
    expect(component.data).toBeUndefined();
    expect(component.database).toEqual('Art Station');
    expect(component.databaseOptions).toEqual(['Art Station', 'Pexels']);
    expect(component.pageNumber).toEqual(1);
    expect(component.searchTerm).toEqual('');
  });

  describe('on search term changed', () => {
    it('should query Pexels database when database selection is set to Pexels', () => {
      expect(imageServiceMock).toBeTruthy();

      imageServiceMock.searchPexels.and.returnValue(new Observable());

      spyOn(component, 'onSearchTermChanged').and.callThrough();
      component.database = 'Pexels';
      component.onSearchTermChanged('test-search-term');

      expect(component.onSearchTermChanged).toHaveBeenCalledOnceWith(
        'test-search-term'
      );

      expect(imageServiceMock.searchPexels).toHaveBeenCalledOnceWith([
        'test-search-term',
      ]);
    });
    it('should query Art Station database when database selection is set to Art Station', () => {
      expect(imageServiceMock).toBeTruthy();

      imageServiceMock.searchArtStationProxy.and.returnValue(new Observable());

      spyOn(component, 'onSearchTermChanged').and.callThrough();
      component.database = 'Art Station';
      component.onSearchTermChanged('test-search-term');

      expect(component.onSearchTermChanged).toHaveBeenCalledOnceWith(
        'test-search-term'
      );

      expect(imageServiceMock.searchArtStationProxy).toHaveBeenCalledOnceWith(
        ['test-search-term'],
        1,
        15
      );
    });
    it('should set data and values for Pexels search', () => {
      imageServiceMock.searchPexels.and.returnValue(of({ data: 'test' }));

      component.database = 'Pexels';
      component.onSearchTermChanged('test-term');

      expect(component.data).toEqual({ data: 'test' });
    });
    it('should test data is set for Art Station search', () => {
      imageServiceMock.searchArtStationProxy.and.returnValue(of(testData));
      expectedResult.page = 1;

      component.database = 'Art Station';
      component.onSearchTermChanged('test-term');

      expect(component.data).toEqual(expectedResult);
    });
  });
  describe('on next page', () => {
    it('should increment page number', () => {
      expect(imageServiceMock).toBeTruthy();
      imageServiceMock.searchArtStationProxy.and.returnValue(new Observable());
      component.pageNumber = 3;
      component.onNextPage(new Event(''));
      expect(component.pageNumber).toEqual(4);
    });
    it('should make correct call for the next page if database option is set to Pexels', () => {
      const testNextPageUrl = 'test-next-page-url';
      expect(imageServiceMock).toBeTruthy();

      imageServiceMock.changePage.and.returnValue(new Observable());

      spyOn(component, 'onNextPage').and.callThrough();

      component.database = 'Pexels';
      component.data = { next_page: testNextPageUrl };

      component.onNextPage(new Event(''));

      expect(component.onNextPage).toHaveBeenCalledTimes(1);

      expect(imageServiceMock.changePage).toHaveBeenCalledOnceWith(
        testNextPageUrl
      );
    });
    it('should make correct call for the next page if database option is set to Art Station', () => {
      const testSearchTerm = 'test-search-term';
      const testPageNumber = 4;
      expect(imageServiceMock).toBeTruthy();

      imageServiceMock.searchArtStationProxy.and.returnValue(new Observable());

      spyOn(component, 'onNextPage').and.callThrough();

      component.database = 'Art Station';
      component.pageNumber = testPageNumber;
      component.searchTerm = testSearchTerm;

      component.onNextPage(new Event(''));

      expect(component.onNextPage).toHaveBeenCalledTimes(1);

      expect(imageServiceMock.searchArtStationProxy).toHaveBeenCalledOnceWith(
        [testSearchTerm],
        testPageNumber + 1,
        15
      );
    });
    it('should set data and values for Pexels search on next page', () => {
      imageServiceMock.changePage.and.returnValue(of({ data: 'test' }));

      component.data = {};
      component.data.next_page = 'test-url-for-next-page';
      component.database = 'Pexels';
      component.onNextPage(new Event(''));

      expect(component.data).toEqual({ data: 'test' });
    });
    it('should test data is set for Art Station search on next page', () => {
      imageServiceMock.searchArtStationProxy.and.returnValue(of(testData));

      component.database = 'Art Station';
      component.onNextPage(new Event(''));

      expectedResult.page = 2;

      expect(component.data).toEqual(expectedResult);
    });
  });
  describe('on previous page', () => {
    it('should decrement page number', () => {
      expect(imageServiceMock).toBeTruthy();
      imageServiceMock.searchArtStationProxy.and.returnValue(new Observable());
      component.pageNumber = 3;
      component.onPreviousPage(new Event(''));
      expect(component.pageNumber).toEqual(2);
    });
    it('should make correct call for the previous page if database option is set to Pexels', () => {
      const testPreviousPageUrl = 'test-previous-page-url';
      expect(imageServiceMock).toBeTruthy();

      imageServiceMock.changePage.and.returnValue(new Observable());

      spyOn(component, 'onPreviousPage').and.callThrough();

      component.database = 'Pexels';
      component.data = { prev_page: testPreviousPageUrl };

      component.onPreviousPage(new Event(''));

      expect(component.onPreviousPage).toHaveBeenCalledTimes(1);

      expect(imageServiceMock.changePage).toHaveBeenCalledOnceWith(
        testPreviousPageUrl
      );
    });
    it('should make correct call for the previous page if database option is set to Art Station', () => {
      const testSearchTerm = 'test-search-term';
      const testPageNumber = 4;
      expect(imageServiceMock).toBeTruthy();

      imageServiceMock.searchArtStationProxy.and.returnValue(new Observable());

      spyOn(component, 'onPreviousPage').and.callThrough();

      component.database = 'Art Station';
      component.pageNumber = testPageNumber;
      component.searchTerm = testSearchTerm;

      component.onPreviousPage(new Event(''));

      expect(component.onPreviousPage).toHaveBeenCalledTimes(1);

      expect(imageServiceMock.searchArtStationProxy).toHaveBeenCalledOnceWith(
        [testSearchTerm],
        testPageNumber - 1,
        15
      );
    });
    it('should set data and values for Pexels search on previous page', () => {
      imageServiceMock.changePage.and.returnValue(of({ data: 'test' }));

      component.data = {};
      component.data.prev_page = 'test-url-for-prev-page';
      component.database = 'Pexels';
      component.onPreviousPage(new Event(''));

      expect(component.data).toEqual({ data: 'test' });
    });
    it('should test data is set for Art Station search on previous page', () => {
      imageServiceMock.searchArtStationProxy.and.returnValue(of(testData));

      component.database = 'Art Station';
      component.onPreviousPage(new Event(''));

      expectedResult.page = 0;

      expect(component.data).toEqual(expectedResult);
    });
  });
  describe('on image clicked', () => {
    it('should emit given url', () => {
      const testUrl = 'test-url';

      spyOn(component.imageSelected, 'emit');
      expect(component.imageSelected.emit).not.toHaveBeenCalled();

      component.onImageClicked(testUrl);

      expect(component.imageSelected.emit).toHaveBeenCalledOnceWith(testUrl);
    });
  });
  describe('convert Art Station Object', () => {
    it('should convert art station object to universally recognised format', () => {
      expectedResult.page = 1;
      expect(component.convertArtStationObject(testData, 1)).toEqual(
        expectedResult
      );
    });
    it('should convert art station object to universally recognised format with undefined next page if there is not one', () => {
      expectedResult.page = 1;
      expectedResult.next_page = undefined;
      expectedResult.total_results = 0;
      testData.total_count = 0;
      expect(component.convertArtStationObject(testData, 1)).toEqual(
        expectedResult
      );
    });
    it('should convert art station object to universally recognised format with true next page if there one', () => {
      expectedResult.page = 1;
      expectedResult.next_page = true;
      expectedResult.total_results = 16;

      testData.total_count = 16;
      expect(component.convertArtStationObject(testData, 1)).toEqual(
        expectedResult
      );
    });
  });
});
