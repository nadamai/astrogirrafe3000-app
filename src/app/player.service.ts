import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  public x: number = 80;
  public y: number = 110;
  public rotation: number = 0;
  public direction: number = 1;

  private animationInterval: number = 20;

  constructor() { }

  public face(direction) {
    console.log(direction);

    this.direction = (direction === 'right') ? 1 : -1;
  }

  public moveTo(newX, newY, time) {
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

    const linearFunctionParameters = (x1, y1, x2, y2) => {
      const a = (y1 - y2) / (x1 - x2);
      const b = y1 - x1 * ((y1 - y2) / (x1 - x2));

      return [a, b];
    }

    const parameters = linearFunctionParameters(oldX, oldY, newX, newY);

    const movement = setInterval(() => {
      if (progress >= steps) {
        this.x = newX;
        this.y = newY;

        clearInterval(movement);

        return;
      }

      const t = progress / steps;

      this.x = parametrisation(t, oldX, newX);
      this.y = this.x * parameters[0] + parameters[1];

      progress++;
    }, this.animationInterval)
  }
}
