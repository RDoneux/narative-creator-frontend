import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  consoleError(message: string) {
    console.error(message);
  }
}
