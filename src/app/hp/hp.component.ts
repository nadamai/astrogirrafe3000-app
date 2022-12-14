import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-hp',
  templateUrl: './hp.component.html',
  styleUrls: ['./hp.component.scss']
})
export class HpComponent implements OnInit {
  public visible: number = 0;

  constructor(
    public player: PlayerService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.visible++;

      setTimeout(() => {
        this.visible++;

        setTimeout(() => {
          this.visible++;
        }, 300)
      }, 300)
    }, 600)
  }
}
