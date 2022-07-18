import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('console error', () => {
    it('should print a console error', () => {
      spyOn(console, 'error');

      expect(console.error).not.toHaveBeenCalled();

      service.consoleError('test-error');

      expect(console.error).toHaveBeenCalledWith('test-error');
    })
  })
});
