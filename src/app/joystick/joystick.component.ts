import { Component, Host, OnInit } from '@angular/core';
import { ControlsComponent } from '../controls/controls.component';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss']
})
export class JoystickComponent implements OnInit {

  constructor(
    @Host() public controls: ControlsComponent
  ) { }
}
