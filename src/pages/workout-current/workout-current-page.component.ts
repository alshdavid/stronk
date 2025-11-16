import { Component, OnDestroy, OnInit } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';
import { TopNavService } from '../../services/top-nav.service';
import { CurrentWorkoutPanelService } from '../../services/current-workout-panel.service';
import { CurrentWorkoutService } from '../../services/current-workout.service';

@Component({
  standalone: false,
  selector: 'app-page-workout-current',
  templateUrl: './workout-current-page.component.html',
  styleUrl: './workout-current-page.component.css',
  host: {
    '[class.open]': 'currentWorkoutPanelService.open', // Binds 'my-active-class' based on 'isActive' property
  },
})
export class WorkoutCurrentPageComponent {
  currentWorkoutPanelService: CurrentWorkoutPanelService;
  #currentWorkoutService: CurrentWorkoutService;

  constructor(
    currentWorkoutPanelService: CurrentWorkoutPanelService,
    currentWorkoutService: CurrentWorkoutService,
  ) {
    this.currentWorkoutPanelService = currentWorkoutPanelService;
    this.#currentWorkoutService = currentWorkoutService;
  }

  openPanel() {
    this.currentWorkoutPanelService.openPanel();
  }

  closePanel() {
    this.currentWorkoutPanelService.closePanel();
  }

  finishWorkout() {
    this.#currentWorkoutService.workout = null;
    this.currentWorkoutPanelService.closePanel();
  }
}
