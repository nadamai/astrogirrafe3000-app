import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @HostBinding('class.start') start: boolean = false;

  public skip: boolean = false;
  public phase: number = 0;

  private giraffeInterval: any;

  Arr = Array;

  constructor(
    public player: PlayerService,
    public game: GameService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.start = true;

      setTimeout(() => {
        this.phase = 1;
        this.skip = true;

        setTimeout(() => {
          this.phase = 2;

          setTimeout(() => {
            this.triggerTheGiraffe();

            setTimeout(() => {
              this.phase = 3;

              setTimeout(() => {
                this.skipIntro();
              }, 11000)
            }, 5000)
          }, 7000)
        }, 13500)
      }, 3000)
    }, 1)
  }

  triggerTheGiraffe() {
    if (this.game.stage !== 'intro') {
      return;
    }

    this.player.rotation = 170;

    this.giraffeInterval = setInterval(() => {
      this.player.x -= 0.05;
      this.player.y -= 0.15;
    }, 10);
  }

  skipIntro() {
    console.log('skip');

    clearInterval(this.giraffeInterval);

    this.game.stage = 'title';
  }
}
