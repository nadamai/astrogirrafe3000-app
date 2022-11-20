import { Component, HostBinding, Input } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @HostBinding('style.top') @Input() top: string;
  @HostBinding('style.left') @Input() left: string;
  @HostBinding('style.transform') @Input() transform: SafeStyle;

  @Input() length: number = 0;

  constructor(
    public player: PlayerService
  ) { }

  getHeadTop() {
    return (-0.5 - this.player.length) + 'vw';
  }

  getNeckHeight() {
    return (4.7 + this.player.length) + 'vw';
  }

}
