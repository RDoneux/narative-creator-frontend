import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private api: ApiService) {}

  search(queryParams: string[]): Observable<any> {
    return this.api.get('https://api.pexels.com/v1/search', {
      params: { query: queryParams.join(' ') },
      headers: {
        Authorization:
          '563492ad6f917000010000016e45d0e1dd39438ab078dd0dfd61c0af',
      },
    });
  }
}
