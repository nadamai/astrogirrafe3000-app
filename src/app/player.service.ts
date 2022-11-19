import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public x: number = 0;
  public y: number = 0;
  public rotation: number = 0;

  constructor() { }
}
