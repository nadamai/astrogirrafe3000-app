import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  public stage: string = 'title';

  play() {
    this.stage = 'gameplay';
  }
}
