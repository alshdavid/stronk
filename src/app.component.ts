import { Component } from '@angular/core';
import { BottomNavService } from './services/bottom-nav.service';

@Component({
  standalone: false,
  selector: 'app-root',
  styles: `

  `,
  template: /*html*/`
    <app-nav></app-nav>
    <router-outlet></router-outlet>
    <app-bottom-navigation [ngClass]="{hide: !bottomNavService.visible}"></app-bottom-navigation>
  `,
})
export class AppComponent {
  hide: boolean = false

  bottomNavService: BottomNavService

  constructor(
    bottomNavService: BottomNavService
  ) {
    this.bottomNavService = bottomNavService
  }
}

//
//
