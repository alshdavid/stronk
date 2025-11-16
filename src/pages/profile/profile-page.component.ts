import { Component, OnDestroy, OnInit } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';
import { TopNavService } from '../../services/top-nav.service';
import { ProfilePageNavComponent } from './profile-nav.component';

@Component({
  standalone: false,
  selector: 'app-page-profile',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  #bottomNavService: BottomNavService;
  #topNavService: TopNavService;

  constructor(bottomNavService: BottomNavService, topNavService: TopNavService) {
    this.#bottomNavService = bottomNavService;
    this.#topNavService = topNavService;
  }

  ngOnInit(): void {
    this.#topNavService.updateTitle('Profile');
    this.#topNavService.setToolbar(ProfilePageNavComponent);
  }

  ngOnDestroy(): void {
    this.#topNavService.resetToolbar();
  }

  toggle() {
    this.#bottomNavService.toggle();
  }
}
