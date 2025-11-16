import { Component, OnInit } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';
import { TopNavService } from '../../services/top-nav.service';
import { WorkoutPageNavComponent } from './workout-nav.component';
import { CurrentWorkoutService, Workout } from '../../services/current-workout.service';
import { CurrentWorkoutPanelService } from '../../services/current-workout-panel.service';

@Component({
  standalone: false,
  selector: 'app-page-workout',
  templateUrl: './workout-page.component.html',
  styleUrl: './workout-page.component.css',
})
export class WorkoutPageComponent implements OnInit {
  #topNavService: TopNavService;
  #currentWorkoutService: CurrentWorkoutService;
  #currentWorkoutPanelService: CurrentWorkoutPanelService;

  get workout(): Workout | null {
    return this.#currentWorkoutService.workout;
  }

  constructor(
    topNavService: TopNavService,
    currentWorkoutPanelService: CurrentWorkoutPanelService,
    currentWorkoutService: CurrentWorkoutService,
  ) {
    this.#topNavService = topNavService;
    this.#currentWorkoutService = currentWorkoutService;
    this.#currentWorkoutPanelService = currentWorkoutPanelService;
  }

  ngOnInit(): void {
    this.#topNavService.updateTitle('Workout');
    this.#topNavService.setToolbar(WorkoutPageNavComponent);
  }

  ngOnDestroy(): void {
    this.#topNavService.resetToolbar();
  }

  startNewWorkout() {
    this.#currentWorkoutService.startNewWorkout();
    this.#currentWorkoutPanelService.openPanel();
  }

  openWorkout() {
    this.#currentWorkoutPanelService.openPanel();
  }
}
