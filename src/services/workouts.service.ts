import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

export type Workout = {
  id: string;
  date: string;
  title: string;
  exercises: Array<Exercise>;
};

export type Exercise = {
  name: string;
  sets: Array<WorkoutSet>;
};

export type WorkoutSet = {
  reps: null | number;
  weight: null | number;
  done: boolean;
};

const ACTIVE_KEY = 'stronk:active';

@Injectable()
export class WorkoutsService {
  #storageService: StorageService;

  constructor(storageService: StorageService) {
    this.#storageService = storageService;
  }

  async *listWorkouts(): AsyncIterable<Workout> {
    const active = globalThis.localStorage.getItem(ACTIVE_KEY);

    for (const key of await this.#storageService.listItems()) {
      if (key === active) continue;
      yield (await this.#storageService.getItemJson<Workout>(key))!;
    }
  }

  getWorkout(id: string): Promise<Workout | null> {
    return this.#storageService.getItemJson<Workout>(id);
  }
}
