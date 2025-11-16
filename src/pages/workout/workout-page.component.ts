import { Component } from '@angular/core';
import { CurrentWorkoutService } from '../../services/current-workout.service';
import { CurrentWorkoutPanelService } from '../../services/current-workout-panel.service';
import type { Workout } from '../../services/workouts.service';

@Component({
  standalone: false,
  selector: 'app-page-workout',
  templateUrl: './workout-page.component.html',
  styleUrl: './workout-page.component.css',
})
export class WorkoutPageComponent {
  #currentWorkoutService: CurrentWorkoutService;
  #currentWorkoutPanelService: CurrentWorkoutPanelService;

  get workout(): Workout | null {
    return this.#currentWorkoutService.workout;
  }

  constructor(
    currentWorkoutPanelService: CurrentWorkoutPanelService,
    currentWorkoutService: CurrentWorkoutService,
  ) {
    this.#currentWorkoutService = currentWorkoutService;
    this.#currentWorkoutPanelService = currentWorkoutPanelService;
  }

  startNewWorkout() {
    this.#currentWorkoutService.startNewWorkout();
    this.#currentWorkoutPanelService.openPanel();
  }

  openWorkout() {
    this.#currentWorkoutPanelService.openPanel();
  }
}
