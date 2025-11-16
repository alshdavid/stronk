import { Component } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';

@Component({
  standalone: false,
  selector: 'app-page-history',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {
  #bottomNavService: BottomNavService

  constructor(
    bottomNavService: BottomNavService
  ) {
    this.#bottomNavService = bottomNavService
  }

  toggle() {
    this.#bottomNavService.toggle()
  }
}
