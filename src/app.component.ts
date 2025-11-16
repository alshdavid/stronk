import { Component } from '@angular/core';
import { BottomNavService } from './services/bottom-nav.service';

@Component({
  standalone: false,
  selector: 'app-root',
  styles: `

  `,
  template: /*html*/`
    <app-navigation-top></app-navigation-top>
    <router-outlet></router-outlet>
    <app-navigation-bottom [ngClass]="{hide: !bottomNavService.visible}"></app-navigation-bottom>
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
