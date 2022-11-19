import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @HostBinding('class.start') start: boolean = false;

  public phase: number = 0;

  Arr = Array;

  ngOnInit() {
    setTimeout(() => {
      this.start = true;

      setTimeout(() => {
        this.phase = 1;
      }, 3000)

      setTimeout(() => {
        this.phase = 2;
      }, 16500)
    }, 1)
  }
}
