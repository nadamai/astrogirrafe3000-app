import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  public stage: string = 'title';

  constructor(
    public player: PlayerService
  ) { }

  play() {
    this.stage = 'gameplay';

    this.player.x = 50 - (15 / 2);
    this.player.y = 110;
    this.player.rotation = 180;
  }
}
