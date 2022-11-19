import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public range(n: number) {
    return Array(n).fill(1);
  }

  public linearFunctionParameters = (x1, y1, x2, y2) => {
    const a = (y1 - y2) / (x1 - x2);
    const b = y1 - x1 * ((y1 - y2) / (x1 - x2));

    return [a, b];
  }
}
