import { Component, HostBinding, Input } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
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
    public player: PlayerService,
    public sanitizer: DomSanitizer
  ) { }

  getHeadTop() {
    return this.sanitizer.bypassSecurityTrustStyle('calc(-0.5vw - ' + this.player.length + 'vh)');
  }

  getNeckHeight() {
    return this.sanitizer.bypassSecurityTrustStyle('calc(4.7vw + ' + this.player.length + 'vh)');
  }

}
