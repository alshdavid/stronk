import { Component, OnInit } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';
import { TopNavService } from '../../services/top-nav.service';

@Component({
  standalone: false,
  selector: 'app-page-profile',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
  #bottomNavService: BottomNavService
  #topNavService: TopNavService

  constructor(
    bottomNavService: BottomNavService,
    topNavService: TopNavService,
  ) {
    this.#bottomNavService = bottomNavService
    this.#topNavService = topNavService
  }

  ngOnInit(): void {
      this.#topNavService.updateTitle('Profile')
  }

  toggle() {
    this.#bottomNavService.toggle()
  }
}
