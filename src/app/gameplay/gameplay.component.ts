import { Component, HostBinding, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss']
})
export class GameplayComponent implements OnInit {
  @HostBinding('class.active') active = false;

  private delta: number = 100;

  public starsTop: string = '-100vh';
  public stars2Top: string = '0';
  public starsTransition: string = 'top 2s linear';
  public stars2Transition: string = 'top 2s linear';

  private boostSpeedInterval: number = 10;

  constructor(
    public game: GameService,
    public helper: HelperService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.active = true;

      this.starsAnimation();
    }, 50);

    setInterval(() => {
      this.boostSpeed();
    }, this.boostSpeedInterval * 1000);
  }

  starsAnimation(): void {
    this.starsTransition = 'none';
    this.starsTop = '-100vh';
    this.stars2Top = '0';

    setTimeout(() => {
      this.starsTransition = 'top ' + this.game.starsSpeed + 's linear';
      this.starsTop = '0';
      this.stars2Top = '100vh';

      setTimeout(() => {
        this.stars2Transition = 'none';
        this.stars2Top = '-100vh';
        this.starsTop = '100vh';

        setTimeout(() => {
          this.stars2Transition = 'top ' + this.game.starsSpeed + 's linear';
          this.stars2Top = '0';

          setTimeout(() => {
            this.starsAnimation();
          }, (this.game.starsSpeed * 1000) - this.delta)
        }, this.delta);
      }, this.game.starsSpeed * 1000)
    }, this.delta);
  }

  boostSpeed() {
    this.game.starsSpeed *= .99;
  }
}
