import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @HostBinding('class.start') start: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.start = true;
    }, 1)

  }
}
