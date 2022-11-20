import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  public stage: string = 'gameplay'; // TODO: intro
  public controls: boolean = false;

  public hit: boolean = false;
  public starsSpeed: number = 2;
  public asteroidSpeed: number = .2;
  public createAsteroidInterval: number = 5;

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

    this.player.moveTo(this.player.x, 80, 5000, () => {
      setTimeout(() => {
        this.showControls();
      }, 200);
    })
  }

  showControls() {
    this.controls = true;
  }

  over() {
    this.hit = true;

    setTimeout(() => {
      this.hit = false;
    });
  }
}
