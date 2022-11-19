import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent {
  @HostBinding('style.top') public top: string = '0vw';
  @HostBinding('style.left') public left: string = '0vw';
  @HostBinding('style.opacity') public opacity: number = 1;
  @HostBinding('style.transform') public transform: string = 'scale(1)';

  constructor() {
    const top = Math.floor(Math.random() * 500)

    this.top = top + 'vh';
    this.left = Math.floor(Math.random() * 100) + 'vw';
    this.opacity = Math.max(0, -(1.8) * (top / 500) + 1);

    console.log( top, this.opacity );

    this.transform = 'scale(' + (0.2 + Math.random() * 1) + ')';
  }
}
