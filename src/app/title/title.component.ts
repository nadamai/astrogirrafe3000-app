import { Component, HostBinding, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @HostBinding('class.active') active = false;
  @HostBinding('class.closing') closing = false;

  constructor(
    public game: GameService,
    public helper: HelperService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.active = true;
    }, 300);
  }

  play() {
    this.closing = true;

    setTimeout(() => {
      this.game.play();
    }, 1000)
  }
}
