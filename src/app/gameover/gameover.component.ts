import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.scss']
})
export class GameoverComponent implements OnInit {
  public restart: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.restart = true;
    }, 6000);
  }

  reload() {
    window.location.reload();
  }
}
