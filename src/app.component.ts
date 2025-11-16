import { Component } from '@angular/core';
import { BottomNavService } from './services/bottom-nav.service';
import { CurrentWorkoutService } from './services/current-workout.service';

@Component({
  standalone: false,
  selector: 'app-root',
  styles: ``,
  template: /*html*/ `
    <app-page-workout-current
      [ngClass]="{ hasWorkout: currentWorkoutService.hasWorkout, open: currentWorkoutService.open }"
    ></app-page-workout-current>
    <app-navigation-top></app-navigation-top>
    <router-outlet></router-outlet>
    <app-navigation-bottom [ngClass]="{ hide: !bottomNavService.visible }"></app-navigation-bottom>
  `,
})
export class AppComponent {
  bottomNavService: BottomNavService;
  currentWorkoutService: CurrentWorkoutService;

  constructor(bottomNavService: BottomNavService, currentWorkoutService: CurrentWorkoutService) {
    this.bottomNavService = bottomNavService;
    this.currentWorkoutService = currentWorkoutService;
  }
}
