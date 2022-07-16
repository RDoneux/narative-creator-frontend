import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  debounce = <F extends (...args: any[]) => any>(
    func: F,
    waitFor: number
  ) => {
    let timeout: ReturnType<typeof setTimeout> | null = null
  
    const debounced = (...args: Parameters<F>) => {
      if (timeout !== null) {
        clearTimeout(timeout)
        timeout = null
      }
      timeout = setTimeout(() => func(...args), waitFor)
    }
  
    return debounced as (...args: Parameters<F>) => ReturnType<F>
  }
  
}
