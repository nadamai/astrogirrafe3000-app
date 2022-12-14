import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  public stage: string = 'intro';
  public controls: boolean = false;
  public asteroids: any[] = [];

  public beam: boolean = false;
  public highestScore: number|null = null;
  public score: number = 0;
  public hit: boolean = false;
  public starsSpeed: number = 2;
  public asteroidSpeed: number = .2;
  public createAsteroidInterval: number = 5;

  private scoreInterval: any;

  constructor(
    public player: PlayerService,
    public game: GameService
  ) {
    this.highestScore = localStorage.getItem('highest_score') ? parseInt(localStorage.getItem('highest_score')) : null;

    if (!!localStorage.getItem('start_with_gameplay')) {
      this.stage = 'gameplay';

      localStorage.removeItem('start_with_gameplay')
    }

    if (this.stage === 'gameplay') {
      this.play();
    }
  }

  play() {
    this.stage = 'gameplay';

    this.player.x = 50 - (this.player.size / 2);
    this.player.y = 110;
    this.player.rotation = 180;

    this.player.moveTo(this.player.x, 80, 5000, () => {
      setTimeout(() => {
        this.showControls();
        this.startCountingScore();
      }, 200);
    })
  }

  showControls() {
    this.controls = true;
  }

  startCountingScore() {
    this.scoreInterval = setInterval(() => {
      this.score++;
    }, 100);
  }

  harm() {
    this.hit = true;
    this.player.hp--;

    if (!this.player.hp) {
      this.over();
    }

    setTimeout(() => {
      this.hit = false;
    }, 150);
  }

  over() {
    this.controls = false;
    this.player.died = true;

    setTimeout(() => {
      if (!this.highestScore || this.score > this.highestScore) {
        localStorage.setItem('highest_score', this.score.toString())
      }
    }, 1000);

    clearInterval(this.scoreInterval);
  }

  special() {
    if (this.player.sp < 99) {
      return;
    }

    this.beam = true;

    setTimeout(() => {
      this.beam = false;
      this.player.sp = 0;

      this.asteroids = [];
    }, 1000);
  }
}
