import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  public stage: string = 'gameplay';

  constructor(
    public player: PlayerService
  ) {
    if (this.stage === 'gameplay') {
      this.play();
    }
  }

  play() {
    this.stage = 'gameplay';

    this.player.x = 50 - (15 / 2);
    this.player.y = 110;
    this.player.rotation = 180;

    this.player.moveTo(this.player.x, 87.5, 5000)
  }
}
