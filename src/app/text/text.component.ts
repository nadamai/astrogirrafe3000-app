import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit, OnDestroy {
  @HostBinding('class.finished') finished: boolean = false;

  @Input() value: string = '';
  @Input() delay: number = 0;
  @Input() visible: number = 0;
  @Input() interval: number = 80;

  public text: string = '';

  private textInterval: any;

  constructor(
    public game: GameService
  ) { }

  ngOnInit() {
    this.text = this.value.split('').map((letter) => {
      return '<span class="letter">' + letter + '</span>';
    }).join('');

    setTimeout(() => {
      let index = 0;

      this.textInterval = setInterval(() => {
        if (this.game.stage !== 'intro' && this.game.stage !== 'gameplay') {
          return;
        }

        if (typeof this.value[index] === 'undefined') {
          if (!this.visible) {
            return;
          }

          clearInterval(this.textInterval);

          setTimeout(() => {
            this.finished = true;
          }, this.visible * 1000)

          return;
        }

        const letter = document.querySelector('app-text[value="' + this.value + '"] span.letter:nth-child(' + (index + 1) + ')');

        if (letter) {
          letter.classList.add('visible');
        }

        index++;
      }, this.interval);
    }, this.delay * 1000);
  }

  ngOnDestroy() {
    clearInterval(this.textInterval);
  }
}
