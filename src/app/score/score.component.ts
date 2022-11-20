import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  public skip: boolean = true;

  constructor(
    public game: GameService,
    public player: PlayerService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.skip = false;
    }, 50);
  }
}
