import { Component } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';

@Component({
  standalone: false,
  selector: 'app-page-settings',
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css',
})
export class SettingsPageComponent {
  #bottomNavService: BottomNavService;

  constructor(bottomNavService: BottomNavService) {
    this.#bottomNavService = bottomNavService;
  }

  toggle() {
    this.#bottomNavService.toggle();
  }
}
