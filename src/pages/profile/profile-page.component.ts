import { Component } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';

@Component({
  standalone: false,
  selector: 'app-page-profile',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {
  #bottomNavService: BottomNavService;

  constructor(bottomNavService: BottomNavService) {
    this.#bottomNavService = bottomNavService;
  }

  toggle() {
    this.#bottomNavService.toggle();
  }
}
