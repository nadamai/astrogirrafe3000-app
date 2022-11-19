import { Component, HostBinding, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @HostBinding('class.start') start: boolean = false;

  public phase: number = 0;

  Arr = Array;

  constructor(
    public player: PlayerService
  ) {
    this.player.x = 80;
    this.player.y = 80;
  }

  ngOnInit() {
    setTimeout(() => {
      this.start = true;

      setTimeout(() => {
        this.phase = 1;
      }, 3000)

      setTimeout(() => {
        this.phase = 2;
      }, 16500)
    }, 1)
  }
}
