import { Component, HostBinding, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss']
})
export class GameplayComponent implements OnInit {
  @HostBinding('class.active') active = false;

  public starsSpeed: number = 2;
  private delta: number = 100;

  public starsTop: string = '-100vh';
  public stars2Top: string = '0';
  public starsTransition: string = 'top 2s linear';
  public stars2Transition: string = 'top 2s linear';

  private boostSpeedInterval: number = 10;

  constructor(
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
      this.starsTransition = 'top ' + this.starsSpeed + 's linear';
      this.starsTop = '0';
      this.stars2Top = '100vh';

      setTimeout(() => {
        this.stars2Transition = 'none';
        this.stars2Top = '-100vh';
        this.starsTop = '100vh';

        setTimeout(() => {
          this.stars2Transition = 'top ' + this.starsSpeed + 's linear';
          this.stars2Top = '0';

          setTimeout(() => {
            this.starsAnimation();
          }, (this.starsSpeed * 1000) - this.delta)
        }, this.delta);
      }, this.starsSpeed * 1000)
    }, this.delta);
  }

  boostSpeed() {
    this.starsSpeed *= .99;
  }
}
