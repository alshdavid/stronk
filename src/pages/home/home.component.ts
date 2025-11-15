import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-root',
  template: /*html*/`<div>Home Page{{title}}</div>`,
})
export class HomePageComponent {
  protected title = 'stronk';
}
