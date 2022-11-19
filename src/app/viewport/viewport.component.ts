import { Component, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GameService } from '../game.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.scss']
})
export class ViewportComponent implements OnInit {
  @HostBinding('class.active') active: boolean = false;

  constructor(
    public player: PlayerService,
    public game: GameService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.active = true;
    }, 1000)
  }

  getHeroTransform() {
    return this.sanitizer.bypassSecurityTrustStyle('rotate(' + this.player.rotation + 'deg) scaleX(' + (this.player.direction * 100) + '%)');
  }
}
