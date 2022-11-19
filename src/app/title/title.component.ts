import { Component, HostBinding, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @HostBinding('class.active') active = false;
  @HostBinding('class.closing') closing = false;

  Arr = Array;

  constructor(
    public game: GameService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.active = true;
    }, 300);
  }

  play() {
    console.log('play');
    this.closing = true;
    this.game.play();
  }
}
