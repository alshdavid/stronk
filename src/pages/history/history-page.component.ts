import { Component, OnInit } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';
import { TopNavService } from '../../services/top-nav.service';
import { HistoryPageNavComponent } from './history-nav.component';

@Component({
  standalone: false,
  selector: 'app-page-history',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})
export class HistoryPageComponent implements OnInit {
  #bottomNavService: BottomNavService;
  #topNavService: TopNavService;

  constructor(bottomNavService: BottomNavService, topNavService: TopNavService) {
    this.#bottomNavService = bottomNavService;
    this.#topNavService = topNavService;
  }

  ngOnInit(): void {
    this.#topNavService.updateTitle('History');
    this.#topNavService.setToolbar(HistoryPageNavComponent);
  }

  ngOnDestroy(): void {
    this.#topNavService.resetToolbar();
  }

  toggle() {
    this.#bottomNavService.toggle();
  }
}
