import { Component, HostBinding, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.scss']
})
export class ViewportComponent implements OnInit {
  @HostBinding('class.active') active: boolean = false;

  constructor(
    public player: PlayerService,
    public game: GameService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.active = true;
    }, 1000)
  }
}
