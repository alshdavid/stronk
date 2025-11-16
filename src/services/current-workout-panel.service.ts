import { Injectable } from '@angular/core';
import { BottomNavService } from './bottom-nav.service';
import { CurrentWorkoutService } from './current-workout.service';

@Injectable()
export class CurrentWorkoutPanelService {
  open: boolean;
  hasWorkout: boolean;
  #bottomNavService: BottomNavService;
  #currentWorkoutService: CurrentWorkoutService;

  constructor(bottomNavService: BottomNavService, currentWorkoutService: CurrentWorkoutService) {
    this.#currentWorkoutService = currentWorkoutService;
    this.#bottomNavService = bottomNavService;
    this.open = this.#hashChange();
    globalThis.addEventListener('hashchange', this.#hashChange);
    this.hasWorkout = !!this.#currentWorkoutService.workout;
  }

  togglePanel() {
    if (this.open) {
      this.closePanel();
    } else {
      this.openPanel();
    }
  }

  openPanel() {
    this.open = true;
    globalThis.location.hash = 'currentWorkoutOpen=true';
    this.#bottomNavService.hide();
  }

  closePanel() {
    this.open = false;
    globalThis.location.hash = '';
    this.#bottomNavService.show();
  }

  #hashChange = (): boolean => {
    this.hasWorkout = !!this.#currentWorkoutService.workout;
    if (globalThis.location.hash.includes('currentWorkoutOpen=true')) {
      if (!this.#currentWorkoutService.workout) {
        return false;
      }
      this.openPanel();
      return true;
    } else {
      this.closePanel();
      return false;
    }
  };
}
