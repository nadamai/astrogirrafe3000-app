import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @HostBinding('class.active') active = false;

  Arr = Array;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.active = true;
    }, 300);
  }
}
