import { Injectable, signal, WritableSignal } from '@angular/core';
import { DEFAULT_EXERCISES } from '../utils/exercise-list';

@Injectable()
export class ExerciseListService {
  exercises: WritableSignal<Array<string>>;

  constructor() {
    const defaultExercises = Array.from(DEFAULT_EXERCISES).sort();
    this.exercises = signal([...defaultExercises]);
  }
}
