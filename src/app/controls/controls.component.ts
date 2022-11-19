import { Component, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
    public sanitizer: DomSanitizer
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

    const radius = ((document.querySelector('app-controls > *') as HTMLElement).offsetHeight - (document.querySelector('app-joystick > *') as HTMLElement).offsetHeight) / 2;
    console.log(radius);

    const joystickX = -1 * (this.touchStartX - x);
    const joystickY = -1 * (this.touchStartY - y);

    if (Math.abs(joystickX) > radius || Math.abs(joystickY) > radius) {
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
