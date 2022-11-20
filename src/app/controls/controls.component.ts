import { Component, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HelperService } from '../helper.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @HostBinding('class.active') active: boolean = false;

  public touchStartX?: number = undefined;
  public touchStartY?: number = undefined;

  public joystickX: number = 0;
  public joystickY: number = 0;

  constructor(
    public sanitizer: DomSanitizer,
    private player: PlayerService,
    private helper: HelperService
  ) {};

  ngOnInit() {
    setTimeout(() => {
      this.active = true;
    }, 50);
  }

  touchstart(e) {
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
  }

  touchmove(e) {
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;

    const controls = document.querySelector('app-controls > *') as HTMLElement;
    const joystick = document.querySelector('app-joystick > *') as HTMLElement;

    const radius = (controls.offsetHeight - (joystick).offsetHeight) / 2;
    const joystickX = -1 * (this.touchStartX - x);
    const joystickY = -1 * (this.touchStartY - y);

    this.player.moveX(joystickX);

    if (Math.sqrt(Math.pow(joystickX, 2) + Math.pow(joystickY, 2)) > radius) {
      const controlsCenterX = controls.offsetLeft + (controls.offsetWidth / 2);
      const controlsCenterY = controls.offsetTop + (controls.offsetHeight / 2);

      if (controlsCenterX === x) {
        this.joystickX = x;

        if (y < controlsCenterY) {
          this.joystickY = controlsCenterY - radius;

          return;
        }

        this.joystickY = controlsCenterY + radius;

        return;
      }

      const parameters = this.helper.linearFunctionParameters(controlsCenterX, controlsCenterY, x, y);
      const angle = Math.atan(parameters[0]);

      if (x <= controlsCenterX && y > controlsCenterY) {
        this.joystickX = radius * Math.sin(-1 * angle - (Math.PI / 2));
        this.joystickY = radius * Math.cos(-1 * angle - (Math.PI / 2));
      } else if (x <= controlsCenterX && y <= controlsCenterY) {
        this.joystickX = radius * Math.sin(-1 * angle - (Math.PI / 2));
        this.joystickY = radius * Math.cos(-1 * angle - (Math.PI / 2));
      } else if (x > controlsCenterX && y > controlsCenterY) {
        this.joystickX = radius * Math.sin(-1 * angle + (Math.PI / 2));
        this.joystickY = radius * Math.cos(-1 * angle + (Math.PI / 2));
      } else {
        this.joystickX = radius * Math.sin(-1 * angle + (Math.PI / 2));
        this.joystickY = radius * Math.cos(-1 * angle + (Math.PI / 2));
      }

      return;
    }

    this.joystickX = joystickX;
    this.joystickY = joystickY;
  }

  touchend(e) {
    this.touchStartX = undefined;
    this.touchStartY = undefined;

    this.joystickX = 0;
    this.joystickY = 0;
  }

  touchcancel(e) {
    this.touchStartX = undefined;
    this.touchStartY = undefined;

    this.joystickX = 0;
    this.joystickY = 0;
  }

  getJoystickTransform() {
    return this.sanitizer.bypassSecurityTrustStyle('translate(' + this.joystickX + 'px, ' + this.joystickY + 'px)');
  }
}
