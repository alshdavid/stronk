import { Component, OnDestroy, OnInit } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';
import { TopNavService } from '../../services/top-nav.service';
import { CurrentWorkoutService } from '../../services/current-workout.service';

@Component({
  standalone: false,
  selector: 'app-page-workout-current',
  templateUrl: './workout-current-page.component.html',
  styleUrl: './workout-current-page.component.css',
  host: {
    '[class.open]': 'currentWorkoutService.open', // Binds 'my-active-class' based on 'isActive' property
  },
})
export class WorkoutCurrentPageComponent implements OnInit, OnDestroy {
  #bottomNavService: BottomNavService;
  #topNavService: TopNavService;
  currentWorkoutService: CurrentWorkoutService;

  constructor(
    bottomNavService: BottomNavService,
    topNavService: TopNavService,
    currentWorkoutService: CurrentWorkoutService,
  ) {
    this.#bottomNavService = bottomNavService;
    this.#topNavService = topNavService;
    this.currentWorkoutService = currentWorkoutService;
  }

  ngOnInit(): void {
    // this.#bottomNavService.hide();
  }

  ngOnDestroy(): void {
    // this.#bottomNavService.show();
  }

  openPanel() {
    this.currentWorkoutService.openPanel();
  }

  closePanel() {
    this.currentWorkoutService.closePanel();
  }
}
