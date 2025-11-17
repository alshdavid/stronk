import { Component, signal, WritableSignal } from '@angular/core';
import { Workout, WorkoutsService } from '../../services/workouts.service';
import { BottomNavService } from '../../services/bottom-nav.service';
import { ExerciseListService } from '../../services/exercise-list.service';
import { Location } from '@angular/common';
import { CurrentWorkoutService } from '../../services/current-workout.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-page-exercise-picker',
  templateUrl: './exercise-picker-page.component.html',
  styleUrl: './exercise-picker-page.component.css',
})
export class ExercisePickerPageComponent {
  #workoutsService: WorkoutsService;
  #bottomNavService: BottomNavService;
  #currentWorkoutService: CurrentWorkoutService;
  workout: Workout | null;
  exerciseListService: ExerciseListService;
  exerciseList: WritableSignal<Array<string>>;
  #location: Location;
  #activatedRoute: ActivatedRoute;
  #index: number | null;

  constructor(
    workoutsService: WorkoutsService,
    bottomNavService: BottomNavService,
    exerciseListService: ExerciseListService,
    activatedRoute: ActivatedRoute,
    location: Location,
    currentWorkoutService: CurrentWorkoutService,
  ) {
    this.#workoutsService = workoutsService;
    this.workout = null;
    this.exerciseListService = exerciseListService;
    this.#bottomNavService = bottomNavService;
    this.exerciseList = signal(this.exerciseListService.exercises());
    this.#currentWorkoutService = currentWorkoutService;
    this.#location = location;
    this.#activatedRoute = activatedRoute;
    this.#index =
      this.#activatedRoute.snapshot.params['index'] === 'null'
        ? null
        : parseInt(this.#activatedRoute.snapshot.params['index'], 10);
  }

  async ngOnInit() {
    this.#bottomNavService.disable();
  }

  applyFilter(filter: string) {
    if (!filter) {
      this.exerciseList.update(() => this.exerciseListService.exercises());
      return;
    }
    this.exerciseList.update(() =>
      this.exerciseListService
        .exercises()
        .filter((entry) => entry.toLowerCase().includes(filter.toLowerCase())),
    );
  }

  pickExercise(exercise: string) {
    if (!this.#currentWorkoutService.workout) {
      this.#location.back();
      return;
    }
    if (this.#index === null) {
      this.#currentWorkoutService.addExercise(exercise);
    } else {
      this.#currentWorkoutService.workout.exercises[this.#index].name = exercise;
    }
    this.#location.back();
  }
}
