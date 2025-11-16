import { Injectable } from '@angular/core';

export type Workout = {
  title: string;
};

@Injectable()
export class CurrentWorkoutService {
  workout: Workout | null;

  constructor() {
    this.workout = null;
  }

  startNewWorkout() {
    if (this.workout) {
      throw new Error('Cannot start workout if workout already exists');
    }

    this.workout = {
      title: 'New Workout',
    };
  }
}
