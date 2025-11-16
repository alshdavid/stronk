import { Injectable } from '@angular/core';
import { BottomNavService } from './bottom-nav.service';

@Injectable()
export class CurrentWorkoutService {
  open: boolean;
  hasWorkout: boolean;
  #bottomNavService: BottomNavService;

  constructor(bottomNavService: BottomNavService) {
    this.#bottomNavService = bottomNavService;
    this.open = this.#hashChange();
    globalThis.addEventListener('hashchange', this.#hashChange);
    this.hasWorkout = true;
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
    if (globalThis.location.hash.includes('currentWorkoutOpen=true')) {
      this.openPanel();
      return true;
    } else {
      this.closePanel();
      return false;
    }
  };
}
