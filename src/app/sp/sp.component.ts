import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-sp',
  templateUrl: './sp.component.html',
  styleUrls: ['./sp.component.scss']
})
export class SpComponent implements OnInit {

  constructor(
    public player: PlayerService
  ) { }

  ngOnInit() {
  }

}
