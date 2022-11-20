import { Component } from '@angular/core';
import { GameService } from './game.service';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    public game: GameService,
    public player: PlayerService
  ) { }
}
