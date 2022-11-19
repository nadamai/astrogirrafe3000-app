import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @HostBinding('class.active') active: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.active = true;
    }, 50);
  }

}
