import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @HostBinding('style.top') public top: string = '0vw';
  @HostBinding('style.left') public left: string = '0vw';
  @HostBinding('style.opacity') public opacity: number = 1;
  @HostBinding('style.transform') public transform: string = 'scale(1)';

  @Input() height: number = 100;
  @Input() gradient: boolean = false;

  ngOnInit() {
    const top = Math.floor(Math.random() * this.height)

    this.top = top + 'vh';
    this.left = Math.floor(Math.random() * 100) + 'vw';

    if (this.gradient) {
      this.opacity = Math.max(0, -(1.7) * (top / this.height) + 1);
    }

    this.transform = 'scale(' + (0.2 + Math.random()) + ')';
  }
}
