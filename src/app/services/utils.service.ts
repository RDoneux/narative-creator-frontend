import { Injectable } from '@angular/core';
import { MessageService } from './message/message.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private message: MessageService) {}

  debounce = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const debounced = (...args: Parameters<F>) => {
      if (timeout !== null) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => func(...args), waitFor);
    };

    return debounced as (...args: Parameters<F>) => ReturnType<F>;
  };
  
  map = (
    value: number,
    startValue: number,
    endValue: number,
    startConstraint: number,
    endConstraint: number
  ) => {
    if (endValue < startValue) {
      this.message.consoleError(
        'end value cannot be smaller than start value. End value: ' +
          endValue +
          '. Start value: ' +
          startValue
      );
    }
    const offset = startConstraint;
    const ratio = (endConstraint - startConstraint) / (endValue - startValue);
    return ratio * (value - startValue) + offset;
  };
}
