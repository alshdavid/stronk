import { Component, OnInit } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';
import { TopNavService } from '../../services/top-nav.service';

@Component({
  standalone: false,
  selector: 'app-page-history',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements OnInit {
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
      this.#topNavService.updateTitle('History')
  }

  toggle() {
    this.#bottomNavService.toggle()
  }
}
