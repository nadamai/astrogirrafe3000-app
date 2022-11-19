import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @HostBinding('style.top') @Input() y: string;
  @HostBinding('style.left') @Input() x: string;
}
