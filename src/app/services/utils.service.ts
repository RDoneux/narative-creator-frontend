import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  // debounce<A = unknown, R = void>(
  //   fn: (args: A) => R,
  //   ms: number
  // ): [(args: A) => Promise<R>, () => void] {
  //   let timer: NodeJS.Timeout;

  //   const debouncedFunction = (args: A): Promise<R> =>
  //     new Promise((resolve) => {
  //       if (timer) {
  //         clearTimeout(timer);
  //       }
  //       timer = setTimeout(() => {
  //         resolve(fn(args));
  //       }, ms);
  //     });
  //   const teardown = () => {
  //     clearTimeout(timer);
  //   };
  //   return [debouncedFunction, teardown];
  // }

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
