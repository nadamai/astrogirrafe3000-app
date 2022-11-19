import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.scss']
})
export class ViewportComponent implements OnInit {
  @HostBinding('class.active') active: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.active = true;
    }, 1000)
  }
}
