import { Component, OnInit } from '@angular/core';
import { Workout, WorkoutsService } from '../../services/workouts.service';
import { ActivatedRoute } from '@angular/router';
import { BottomNavService } from '../../services/bottom-nav.service';

@Component({
  standalone: false,
  selector: 'app-page-workout-detail',
  templateUrl: './workout-detail-page.component.html',
  styleUrl: './workout-detail-page.component.css',
})
export class WorkoutDetailPageComponent implements OnInit {
  #workoutsService: WorkoutsService;
  #activatedRoute: ActivatedRoute;
  #bottomNavService: BottomNavService;
  workout: Workout | null;

  public get id() {
    return this.#activatedRoute.snapshot.params['id'];
  }

  constructor(
    activatedRoute: ActivatedRoute,
    workoutsService: WorkoutsService,
    bottomNavService: BottomNavService,
  ) {
    this.#activatedRoute = activatedRoute;
    this.#workoutsService = workoutsService;
    this.workout = null;
    this.#bottomNavService = bottomNavService;
  }

  async ngOnInit() {
    this.#bottomNavService.disable();
    this.workout = await this.#workoutsService.getWorkout(this.id);
    console.log(this.workout);
  }

  ngOnDestroy() {
    this.#bottomNavService.enable();
  }

  calculate1rm(weight: number, reps: number): number {
    if (reps === 1) {
      return Math.round(weight);
    }
    const oneRM = weight * (1 + reps / 30);
    return Math.round(oneRM);
  }
}
