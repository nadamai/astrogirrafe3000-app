import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

  constructor(
    public game: GameService,
    public player: PlayerService
  ) { }
}
