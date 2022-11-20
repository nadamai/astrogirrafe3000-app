import { Component, HostBinding, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html',
  styleUrls: ['./asteroid.component.scss']
})
export class AsteroidComponent implements OnInit {
  @HostBinding('style.top') top: string = '-14vh';
  @HostBinding('style.left') left: string = '50vw';

  public anticlockwise: boolean = true;

  private width: number = 14;
  private x: number = 50;
  private y: number = -14;
  private harmless: boolean = false;
  private safezone: number = 5;

  private routeInterval: any;
  private routeIntervalTime: number = 20;

  constructor(
    private game: GameService,
    private player: PlayerService
  ) { }

  ngOnInit() {
    this.x = (Math.random() * 87);
    this.left = this.x + 'vw';
    this.anticlockwise = Math.random() > .5;

    this.routeInterval = setInterval(() => {
      this.y += this.game.asteroidSpeed;
      this.top = this.y + 'vh';

      if (this.harmless) {
        return;
      }

      if ((this.y + this.width - this.safezone) >= this.player.y && (this.y + 2.5*this.safezone <= this.player.y + this.player.size) &&
        (
          (this.x + this.safezone >= this.player.x && this.x <= this.player.x + this.player.size) ||
          (this.x + this.width - this.safezone >= this.player.x && this.x + this.width <= this.player.x + this.player.size)
        )
      ) {
        this.game.harm();
        this.harmless = true;
      }
    }, this.routeIntervalTime);
  }
}
