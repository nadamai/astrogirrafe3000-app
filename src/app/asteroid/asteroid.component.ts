import { Component, HostBinding, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html',
  styleUrls: ['./asteroid.component.scss']
})
export class AsteroidComponent implements OnInit {
  @HostBinding('style.top') top: string = '-14vh';
  @HostBinding('style.left') left: string = '50vw';

  public anticlockwise: boolean = true;

  private y = -14;
  private routeInterval: any;
  private routeIntervalTime: number = 20;

  constructor(
    private game: GameService
  ) { }

  ngOnInit() {
    this.left = (Math.random() * 87) + 'vw';
    this.anticlockwise = Math.random() > .5;

    this.routeInterval = setInterval(() => {
      this.y += this.game.asteroidSpeed;
      this.top = this.y + 'vh';
    }, this.routeIntervalTime);
  }
}
