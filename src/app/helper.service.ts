import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public range(n: number) {
    return Array(n).fill(1);
  }
}
