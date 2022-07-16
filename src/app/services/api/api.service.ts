import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url: string, options: any = {}): Observable<any> {
    return this.http.get(url, this.createRequest(options));
  }

  post (url: string, data: FormData, options: any = {}): Observable<any> {
    return this.http.post(url, data, this.createRequest(options));
  }

  delete(url: string, options: any = {}) {
    return this.http.delete(url, this.createRequest(options));
  }

  patch(url: string, options: any = {}) {
    return this.http.patch(url, this.createRequest(options));
  }

  createRequest(options: any) {
    const headers = options?.headers ? new HttpHeaders({...options.headers}) : {}
    return {...options, headers: headers}
  }
}
