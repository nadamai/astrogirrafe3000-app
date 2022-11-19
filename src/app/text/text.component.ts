import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @HostBinding('class.finished') finished: boolean = false;

  @Input() value: string = '';
  @Input() delay: number = 0;
  @Input() visible: number = 2;
  @Input() interval: number = 80;

  public text: string = '';

  ngOnInit() {
    this.text = this.value.split('').map((letter) => {
      return '<span class="letter">' + letter + '</span>';
    }).join('');

    setTimeout(() => {
      let index = 0;

      const interval = setInterval(() => {
        if (typeof this.value[index] === 'undefined') {
          clearInterval(interval);

          setTimeout(() => {
            this.finished = true;
          }, this.visible * 1000)

          return;
        }

        const letter = document.querySelector('app-text[value="' + this.value + '"] span.letter:nth-child(' + (index + 1) + ')');

        letter.classList.add('visible');

        index++;
      }, this.interval);
    }, this.delay * 1000);
  }
}
