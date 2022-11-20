import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  public hp: number = 3;

  public size: number = 15;
  public x: number = 80;
  public y: number = 110;
  public rotation: number = 0;
  public direction: number = 1;
  public died: boolean = false;

  private animationInterval: number = 20;
  private moveFactor: number = 0.08;

  constructor(
    private helpers: HelperService
  ) { }

  public face(direction) {
    this.direction = (direction === 'right') ? 1 : -1;
  }

  moveX(x) {
    if (typeof x === 'undefined') {
      return;
    }

    const posX = this.x + (x * this.moveFactor);

    if ((posX < (this.size / -2)) || (posX > 100 + (this.size / -2))) {
      return;
    }

    if (x > 0) {
      this.face('right');
    } else {
      this.face('left');
    }

    this.x = posX;
  }

  moveTo(newX, newY, time, callback) {
    let progress = 0;

    const oldX = this.x;
    const oldY = this.y;

    const parametrisation = (t, a, b) => {
      if (a < b) {
        return a + t * Math.abs(b - a)
      }

      return a - t * Math.abs(b - a)
    }

    const steps = Math.round(time / this.animationInterval);

    if (oldX === newX) {
      const movement = setInterval(() => {
        if (progress >= steps) {
          this.y = newY;

          clearInterval(movement);

          if (typeof callback === 'undefined') {
            return;
          }

          callback();

          return;
        }

        const t = progress / steps;

        this.y = parametrisation(t, oldY, newY);
        progress++;
      }, this.animationInterval)

      return;
    }

    if (oldX < newX) {
      this.face('right');
    } else {
      this.face('left');
    }

    const parameters = this.helpers.linearFunctionParameters(oldX, oldY, newX, newY);

    const movement = setInterval(() => {
      if (progress >= steps) {
        this.x = newX;
        this.y = newY;

        clearInterval(movement);

        if (typeof callback === 'undefined') {
          return;
        }

        callback();

        return;
      }

      const t = progress / steps;

      this.x = parametrisation(t, oldX, newX);
      this.y = this.x * parameters[0] + parameters[1];

      progress++;
    }, this.animationInterval)
  }
}
