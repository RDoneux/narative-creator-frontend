import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';
import { SearchBarComponent } from './../presentational-components/search-bar/search-bar.component';
import { MessageService } from './message/message.service';

describe('UtilsService', () => {
  let service: UtilsService;
  let message: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
    message = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('map', () => {
    it('should print error if end value is less than start value', () => {
      spyOn(message, 'consoleError');

      service.map(5, 5, 3, 1, 5);

      expect(message.consoleError).toHaveBeenCalledOnceWith(
        'end value cannot be smaller than start value. End value: 3. Start value: 5'
      );
    });
    it('should return correct mapping between two given ranges', () => {
      expect(service.map(5, 0, 10, 1, 3)).toEqual(2);
      expect(service.map(0, 0, 1000, 239, 240)).toEqual(239);
      expect(service.map(1, 0, 1, 0, 1000)).toEqual(1000);
    });
  });
});
