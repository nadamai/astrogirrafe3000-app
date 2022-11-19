import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  public x: number = 80;
  public y: number = 110;
  public rotation: number = 0;

  constructor() { }
}
