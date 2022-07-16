import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private api: ApiService) {}

  searchPexels(queryParams: string[]): Observable<any> {
    return this.api.get('https://api.pexels.com/v1/search', {
      params: { query: queryParams.join(' ') },
      headers: {
        Authorization:
          '563492ad6f917000010000016e45d0e1dd39438ab078dd0dfd61c0af',
      },
    });
  }

  searchArtStationProxy(
    queryParams: string[],
    pageNumber: number = 1,
    perPage: number = 15
  ) {
    console.error(
      'The following url call is temporary: ' +
        "'http://localhost:8010/proxy'" +
        ' whilst in development. This will need to be replaced with: ' +
        "'http://www.artstation.com/api/v2/search/projects.json'" +
        ' in production'
    );

    return this.api.get(
      'http://localhost:8010/proxy', // temporary whilst in development
      {
        params: {
          page: pageNumber,
          per_page: perPage,
          query: queryParams.join(' '),
        },
      }
    );
  }

  searchArtStation(
    queryParams: string[],
    pageNumber: number = 1,
    perPage: number = 15
  ) {
    return this.api.get(
      'http://www.artstation.com/api/v2/search/projects.json',
      {
        params: {
          page: pageNumber,
          per_page: perPage,
          query: queryParams.join(' '),
        },
      }
    );
  }

  changePage(url: string): Observable<any> {
    return this.api.get(url, {
      headers: {
        Authorization:
          '563492ad6f917000010000016e45d0e1dd39438ab078dd0dfd61c0af',
      },
    });
  }
}
