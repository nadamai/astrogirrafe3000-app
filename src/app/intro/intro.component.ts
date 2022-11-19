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
    this.player.y = 110;
  }

  ngOnInit() {
    setTimeout(() => {
      this.start = true;

      setTimeout(() => {
        this.phase = 1;

        setTimeout(() => {
          this.phase = 2;

          setTimeout(() => {
            this.triggerTheGiraffe();

            setTimeout(() => {
              this.phase = 3;
            }, 5000)
          }, 7000)
        }, 13500)
      }, 3000)
    }, 1)
  }

  triggerTheGiraffe() {
    this.player.rotation = 170;

    const giraffeInterval = setInterval(() => {
      this.player.x -= 0.05;
      this.player.y -= 0.15;
    }, 10);
  }
}
