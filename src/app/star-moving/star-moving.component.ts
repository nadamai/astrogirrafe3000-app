import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-star-moving',
  templateUrl: './star-moving.component.html',
  styleUrls: ['./star-moving.component.scss']
})
export class StarMovingComponent implements OnInit {
  @HostBinding('style.top') public top: string = '50vh';
  @HostBinding('style.left') public left: string = '50vw';
  @HostBinding('style.transform') public transform!: SafeStyle;

  @HostBinding('class.animation') public animation: boolean = false;

  @Input() index: number = 0;

  private delay: number = 10;
  private speed: number = 3000;
  private delta: number = 50;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const angle = Math.random() * 2 * Math.PI;
    const radius = 150;

    const x = radius * Math.sin(angle);
    const y = radius * Math.cos(angle);
    const scale = 4 + Math.random();

    setTimeout(() => {
      const animation = () => {
        this.animation = false;
        this.transform = this.sanitizer.bypassSecurityTrustStyle('translate(0, 0) scale(0)');

        setTimeout(() => {
          this.animation = true;
          this.transform = this.sanitizer.bypassSecurityTrustStyle('translate(' + x + 'vh, ' + y + 'vh) scale(' + scale + ')');
        }, this.delta)
      };

      animation();

      setInterval(() => {
        animation();
      }, this.speed);
    }, this.index * this.delay)
  }
}
