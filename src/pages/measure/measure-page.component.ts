import { Component, OnInit } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';
import { TopNavService } from '../../services/top-nav.service';
import { MeasurePageNavComponent } from './measure-nav.component';

@Component({
  standalone: false,
  selector: 'app-page-measure',
  templateUrl: './measure-page.component.html',
  styleUrl: './measure-page.component.css',
})
export class MeasurePageComponent implements OnInit {
  #bottomNavService: BottomNavService;
  #topNavService: TopNavService;

  constructor(bottomNavService: BottomNavService, topNavService: TopNavService) {
    this.#bottomNavService = bottomNavService;
    this.#topNavService = topNavService;
  }

  ngOnInit(): void {
    this.#topNavService.updateTitle('Measure');
    this.#topNavService.setToolbar(MeasurePageNavComponent);
  }

  ngOnDestroy(): void {
    this.#topNavService.resetToolbar();
  }

  toggle() {
    this.#bottomNavService.toggle();
  }
}
