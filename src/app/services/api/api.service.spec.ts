import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: any;
  const mockURL = 'test-url';

  beforeEach(() => {
    httpMock = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'delete',
      'patch',
    ]);
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpMock }],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate valid request with given options', () => {
    const testOptions = { testOption: 'test-value' };
    const expectedOutput = { testOption: 'test-value', headers: {} };

    const output = service.createRequest(testOptions);
    expect(output).toEqual(expectedOutput);
  });

  describe('get', () => {
    it('should return http.get with same url', () => {
      const getSpy = httpMock.get.and.returnValue(of(mockURL));
      service.get(mockURL).subscribe();
      expect(getSpy.calls.any()).withContext(mockURL);
      expect(httpMock.get).toHaveBeenCalledOnceWith(mockURL, { headers: {} });
    });

    it('should return http.get with same url and params', () => {
      const testOptions = { testOption: 'test-value' };
      const expectedOutput = { testOption: 'test-value', headers: {} };

      const getSpy = httpMock.get.and.returnValue(of(mockURL));
      service.get(mockURL, testOptions);
      expect(getSpy.calls.any()).withContext(mockURL);
      expect(httpMock.get).toHaveBeenCalledOnceWith(mockURL, expectedOutput);
    });
  });

  describe('post', () => {
    it('should return http.post with same url', () => {
      const postSpy = httpMock.post.and.returnValue(of(mockURL));
      const formData: FormData = new FormData();
      service.post(mockURL, formData);
      expect(postSpy.calls.any()).withContext(mockURL);
      expect(httpMock.post).toHaveBeenCalledOnceWith(mockURL, formData, {
        headers: {},
      });
    });
    it('should return http.post with same url and data', () => {
      const postSpy = httpMock.post.and.returnValue(of(mockURL));
      const formData: FormData = new FormData();
      formData.append('test-param', 'test-value');
      service.post(mockURL, formData);
      expect(postSpy.calls.any()).withContext(mockURL);
      expect(httpMock.post).toHaveBeenCalledOnceWith(mockURL, formData, {
        headers: {},
      });
    });
    it('should return http.post with same url, data and options', () => {
      const postSpy = httpMock.post.and.returnValue(of(mockURL));

      const formData: FormData = new FormData();
      formData.append('test-param', 'test-value');

      const testOptions = { testOption: 'test-value' };
      const expectedOptionsOutput = { testOption: 'test-value', headers: {} };

      service.post(mockURL, formData, testOptions);
      expect(postSpy.calls.any()).withContext(mockURL);
      expect(httpMock.post).toHaveBeenCalledOnceWith(
        mockURL,
        formData,
        expectedOptionsOutput
      );
    });
  });
  describe('delete', () => {
    it('should return http.delete with same url', () => {
      const deleteSpy = httpMock.delete.and.returnValue(of(mockURL));
      service.delete(mockURL).subscribe();
      expect(deleteSpy.calls.any()).withContext(mockURL);
      expect(httpMock.delete).toHaveBeenCalledOnceWith(mockURL, {
        headers: {},
      });
    });

    it('should return http.delete with same url and params', () => {
      const testOptions = { testOption: 'test-value' };
      const expectedOutput = { testOption: 'test-value', headers: {} };

      const deleteSpy = httpMock.delete.and.returnValue(of(mockURL));
      service.delete(mockURL, testOptions);
      expect(deleteSpy.calls.any()).withContext(mockURL);
      expect(httpMock.delete).toHaveBeenCalledOnceWith(mockURL, expectedOutput);
    });
  });
  describe('patch', () => {
    it('should return http.patch with same url', () => {
      const patchSpy = httpMock.patch.and.returnValue(of(mockURL));
      service.patch(mockURL).subscribe();
      expect(patchSpy.calls.any()).withContext(mockURL);
      expect(httpMock.patch).toHaveBeenCalledOnceWith(mockURL, { headers: {} });
    });

    it('should return http.patch with same url and params', () => {
      const testOptions = { testOption: 'test-value' };
      const expectedOutput = { testOption: 'test-value', headers: {} };

      const patchSpy = httpMock.patch.and.returnValue(of(mockURL));
      service.patch(mockURL, testOptions);
      expect(patchSpy.calls.any()).withContext(mockURL);
      expect(httpMock.patch).toHaveBeenCalledOnceWith(mockURL, expectedOutput);
    });
  });
  describe('create request', () => {
    it('should create a request without any options', () => {
      expect(service.createRequest({})).toEqual({ headers: {} });
    });
    it('should create a request with options', () => {
      expect(service.createRequest({ test: 'test' })).toEqual({
        test: 'test',
        headers: {},
      });
    });
    it('should create a request when options are undefined', () => {
      expect(service.createRequest(undefined)).toEqual({ headers: {} });
    });
  });
});
