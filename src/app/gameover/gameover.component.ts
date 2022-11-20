import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.scss']
})
export class GameoverComponent implements OnInit {
  public restart: boolean = false;

  constructor(
    public game: GameService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.restart = true;
    }, 6000);
  }

  isHighestScore() {
    return !this.game.highestScore || this.game.score > this.game.highestScore;
  }

  reload() {
    window.location.reload();
  }
}
