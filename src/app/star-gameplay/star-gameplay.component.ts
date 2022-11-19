import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-gameplay',
  templateUrl: './star-gameplay.component.html',
  styleUrls: ['./star-gameplay.component.scss']
})
export class StarGameplayComponent implements OnInit {
  @HostBinding('style.top') public top: string = '0vw';
  @HostBinding('style.left') public left: string = '0vw';
  @HostBinding('style.transform') public transform: string = 'scale(1)';

  constructor() { }

  ngOnInit() {
    this.top = Math.floor(Math.random() * 100) + 'vh';
    this.left = Math.floor(Math.random() * 100) + 'vw';

    this.transform = 'scale(' + (0.2 + Math.random()) + ')';
  }

}
