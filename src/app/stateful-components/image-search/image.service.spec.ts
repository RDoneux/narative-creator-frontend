import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;
  let httpMock: any;
  const mockURL = 'test-url';

  beforeEach(() => {
    httpMock = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpMock }],
    });
    service = TestBed.inject(ImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('search Pexels', () => {
    const mockPexelsUrl = 'https://api.pexels.com/v1/search';
    it('should return api request with no parameters', () => {
      const getSpy = httpMock.get.and.returnValue(of(mockPexelsUrl));
      service.searchPexels([]).subscribe();
      const mockHeaders = jasmine.any(Object);
      expect(getSpy.calls.any()).withContext(mockPexelsUrl);
      expect(httpMock.get).toHaveBeenCalledOnceWith(mockPexelsUrl, {
        params: { query: '' },
        headers: mockHeaders,
      });
    });
    it('should return api request with given parameters', () => {
      const getSpy = httpMock.get.and.returnValue(of(mockPexelsUrl));
      service.searchPexels(['test-param-1', 'test-param-2']).subscribe();
      const mockHeaders = jasmine.any(Object);
      expect(getSpy.calls.any()).withContext(mockPexelsUrl);
      expect(httpMock.get).toHaveBeenCalledOnceWith(mockPexelsUrl, {
        params: { query: 'test-param-1 test-param-2' },
        headers: mockHeaders,
      });
    });
  });

  describe('search Art Station', () => {
    const mockPexelsUrl =
      'http://www.artstation.com/api/v2/search/projects.json';
    it('should return api request with no parameters', () => {
      const getSpy = httpMock.get.and.returnValue(of(mockPexelsUrl));
      service.searchArtStation([]).subscribe();
      const mockHeaders = jasmine.any(Object);
      expect(getSpy.calls.any()).withContext(mockPexelsUrl);
      expect(httpMock.get).toHaveBeenCalledOnceWith(mockPexelsUrl, {
        params: { query: '', per_page: 15, page: 1 },
        headers: mockHeaders,
      });
    });
    it('should return api request with given parameters', () => {
      const getSpy = httpMock.get.and.returnValue(of(mockPexelsUrl));
      service.searchArtStation(['test-param-1', 'test-param-2']).subscribe();
      const mockHeaders = jasmine.any(Object);
      expect(getSpy.calls.any()).withContext(mockPexelsUrl);
      expect(httpMock.get).toHaveBeenCalledOnceWith(mockPexelsUrl, {
        params: { query: 'test-param-1 test-param-2', per_page: 15, page: 1 },
        headers: mockHeaders,
      });
    });
  });
  describe('search Art Station Proxy', () => {
    const mockPexelsUrl = 'http://localhost:8010/proxy';
    it('should return api request with no parameters', () => {
      const getSpy = httpMock.get.and.returnValue(of(mockPexelsUrl));
      service.searchArtStationProxy([]).subscribe();
      const mockHeaders = jasmine.any(Object);
      expect(getSpy.calls.any()).withContext(mockPexelsUrl);
      expect(httpMock.get).toHaveBeenCalledOnceWith(mockPexelsUrl, {
        params: { query: '', per_page: 15, page: 1 },
        headers: mockHeaders,
      });
    });
    it('should return api request with given parameters', () => {
      const getSpy = httpMock.get.and.returnValue(of(mockPexelsUrl));
      service
        .searchArtStationProxy(['test-param-1', 'test-param-2'])
        .subscribe();
      const mockHeaders = jasmine.any(Object);
      expect(getSpy.calls.any()).withContext(mockPexelsUrl);
      expect(httpMock.get).toHaveBeenCalledOnceWith(mockPexelsUrl, {
        params: { query: 'test-param-1 test-param-2', per_page: 15, page: 1 },
        headers: mockHeaders,
      });
    });
  });
  describe('page change', () => {
    const mockUrl = 'mock-url';
    it('should return page change with requested url', () => {
      const getSpy = httpMock.get.and.returnValue(of(mockURL));
      service.changePage(mockURL).subscribe();
      const mockHeaders = jasmine.any(Object);
      expect(getSpy.calls.any()).withContext(mockURL);
      expect(httpMock.get).toHaveBeenCalledOnceWith(mockURL, mockHeaders);
    });
  });
});
