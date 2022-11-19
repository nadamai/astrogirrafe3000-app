import { Component, Host } from '@angular/core';
import { ControlsComponent } from '../controls/controls.component';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss']
})
export class JoystickComponent {

  constructor(
    @Host() public controls: ControlsComponent
  ) { }
}
