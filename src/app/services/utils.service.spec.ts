import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';
import { SearchBarComponent } from './../presentational-components/search-bar/search-bar.component';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
