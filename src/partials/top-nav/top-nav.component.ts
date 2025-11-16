import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  standalone: false,
  selector: 'app-navigation-top',
  template: /*html*/ `
    <div class="boundary"></div>
    <nav>
      <ng-content></ng-content>
    </nav>
  `,
  styleUrl: './top-nav.component.css',
})
export class TopNavComponent {}

@Component({
  standalone: false,
  selector: 'app-navigation-back',
  template: /*html*/ `
    <div (click)="backClicked()">
      <img src="icons/chevron-left.svg" />
      <span>Back</span>
    </div>
  `,
  styles: [
    /*css*/ `
      div {
        display: flex;
        align-items: center;

        img {
          height: 20px;
          width: 25px;
        }

        span {
          line-height: 0px;
        }
      }
    `,
  ],
})
export class TopNavBackComponent {
  #location: Location;

  constructor(location: Location) {
    this.#location = location;
  }

  backClicked() {
    this.#location.back();
  }
}
