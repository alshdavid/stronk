import { Component } from '@angular/core';
import { CurrentWorkoutPanelService } from '../../services/current-workout-panel.service';
import { CurrentWorkoutService } from '../../services/current-workout.service';
import type { Workout } from '../../services/workouts.service';

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

  get workout(): Workout | null {
    return this.#currentWorkoutService.workout;
  }

  constructor(
    currentWorkoutPanelService: CurrentWorkoutPanelService,
    currentWorkoutService: CurrentWorkoutService,
  ) {
    this.currentWorkoutPanelService = currentWorkoutPanelService;
    this.#currentWorkoutService = currentWorkoutService;
  }

  sync() {
    this.#currentWorkoutService.sync();
  }

  openPanel() {
    this.currentWorkoutPanelService.openPanel();
  }

  closePanel() {
    this.currentWorkoutPanelService.closePanel();
  }

  async finishWorkout() {
    await this.#currentWorkoutService.saveWorkout();
    this.currentWorkoutPanelService.closePanel();
  }

  async cancelWorkout() {
    await this.#currentWorkoutService.discardWorkout();
    this.currentWorkoutPanelService.closePanel();
  }

  addExercise() {
    this.#currentWorkoutService.addExercise();
  }

  removeExercise(index: number) {
    this.#currentWorkoutService.removeExercise(index);
  }

  addSet(index: number) {
    this.#currentWorkoutService.addSet(index);
  }
}
