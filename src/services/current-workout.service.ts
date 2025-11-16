import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import type { Workout } from './workouts.service';

const ACTIVE_KEY = 'stronk:active';

@Injectable()
export class CurrentWorkoutService {
  workout: Workout | null;
  #storageService: StorageService;

  constructor(storageService: StorageService) {
    this.workout = null;
    this.#storageService = storageService;
    const active = globalThis.localStorage.getItem(ACTIVE_KEY);
    if (active) {
      this.workout = {
        date: active,
        title: '',
        exercises: [],
      };
      this.#storageService.getItemJson<Workout>(active).then((workout) => {
        if (!workout) {
          globalThis.localStorage.removeItem(ACTIVE_KEY);
          this.workout = null;
          return;
        }
        this.workout = workout;
      });
    }
  }

  sync = debounceAsync(async () => {
    if (!this.workout?.date) {
      return;
    }
    await this.#storageService.setItemJson(this.workout.date, this.workout);
  }, 100);

  async startNewWorkout() {
    if (this.workout) {
      throw new Error('Cannot start workout if workout already exists');
    }

    const date = new Date().toISOString();
    this.workout = {
      title: '',
      date,
      exercises: [],
    };
    globalThis.localStorage.setItem(ACTIVE_KEY, date);
    await this.sync();
  }

  async saveWorkout() {
    if (!this.workout) return;
    await this.sync();
    globalThis.localStorage.removeItem(ACTIVE_KEY);
    this.workout = null;
  }

  async discardWorkout() {
    if (!this.workout) return;
    this.#storageService.removeItem(this.workout.date);
    globalThis.localStorage.removeItem(ACTIVE_KEY);
    this.workout = null;
  }

  async addExercise() {
    if (!this.workout) return;
    this.workout.exercises.push({
      name: '',
      sets: [
        {
          reps: null,
          weight: null,
          done: false,
        },
      ],
    });
    await this.sync();
  }

  async removeExercise(index: number) {
    if (!this.workout) return;
    this.workout.exercises.splice(index, 1);
    await this.sync();
  }

  async addSet(index: number) {
    if (!this.workout) return;
    this.workout.exercises[index].sets.push({
      reps: null,
      weight: null,
      done: false,
    });
    await this.sync();
  }

  async removeSet(index: number, index2: number) {
    if (!this.workout) return;
    this.workout.exercises[index].sets.splice(index2, 1);
    await this.sync();
  }
}

export function debounceAsync<T extends (...args: any[]) => Promise<any>>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timeoutId: number | null = null;
  let pendingPromise: Promise<any> | null = null;

  return async function (...args: Parameters<T>): Promise<ReturnType<T>> {
    // Clear existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Wait for pending promise to resolve if it exists
    if (pendingPromise) {
      await pendingPromise;
    }

    // Create a new promise that resolves after the delay
    return new Promise((resolve, reject) => {
      timeoutId = setTimeout(async () => {
        try {
          // Execute the function and store the promise
          pendingPromise = func(...args);
          const result = await pendingPromise;
          pendingPromise = null;
          resolve(result);
        } catch (error) {
          pendingPromise = null;
          reject(error);
        }
      }, delay);
    });
  };
}
