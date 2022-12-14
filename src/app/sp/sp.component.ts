import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-sp',
  templateUrl: './sp.component.html',
  styleUrls: ['./sp.component.scss']
})
export class SpComponent implements OnInit {

  constructor(
    public game: GameService,
    public player: PlayerService
  ) { }

  ngOnInit() {
  }

}
