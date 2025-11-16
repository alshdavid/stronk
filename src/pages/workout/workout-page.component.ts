import { Component, OnInit } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';
import { TopNavService } from '../../services/top-nav.service';
import { WorkoutPageNavComponent } from './workout-nav.component';

@Component({
  standalone: false,
  selector: 'app-page-workout',
  templateUrl: './workout-page.component.html',
  styleUrl: './workout-page.component.css',
})
export class WorkoutPageComponent implements OnInit {
  #bottomNavService: BottomNavService;
  #topNavService: TopNavService;

  constructor(bottomNavService: BottomNavService, topNavService: TopNavService) {
    this.#bottomNavService = bottomNavService;
    this.#topNavService = topNavService;
  }

  ngOnInit(): void {
    this.#topNavService.updateTitle('Workout');
    this.#topNavService.setToolbar(WorkoutPageNavComponent);
  }

  ngOnDestroy(): void {
    this.#topNavService.resetToolbar();
  }

  toggle() {
    this.#bottomNavService.toggle();
  }
}
