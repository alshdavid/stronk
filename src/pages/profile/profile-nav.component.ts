import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-page-profile-navigation',
  template: /*html*/ ` <img routerLink="/settings" src="icons/gear.svg" /> `,
})
export class ProfilePageNavComponent {}
