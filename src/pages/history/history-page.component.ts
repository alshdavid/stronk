import { Component, OnInit } from '@angular/core';
import { Workout, WorkoutSet, WorkoutsService } from '../../services/workouts.service';
import { formatDate } from '../../utils/dates';

@Component({
  standalone: false,
  selector: 'app-page-history',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})
export class HistoryPageComponent implements OnInit {
  #workoutsService: WorkoutsService;
  workouts: Array<Workout>;

  constructor(workoutsService: WorkoutsService) {
    this.#workoutsService = workoutsService;
    this.workouts = [];
  }

  formatDate = formatDate;

  async ngOnInit() {
    this.workouts = await Array.fromAsync(this.#workoutsService.listWorkouts());
  }

  totalVolume(workout: Workout): number {
    let totalVolume = 0;
    for (const exercise of workout.exercises) {
      for (const set of exercise.sets) {
        if (!set.done) continue;
        totalVolume += (set.reps || 0) * (set.weight || 0);
      }
    }
    return totalVolume;
  }

  bestSet(sets: Array<WorkoutSet>): string {
    let current: WorkoutSet = {
      reps: 0,
      weight: 0,
      done: true,
    };
    for (const set of sets) {
      if (!set.done) continue;
      if ((set.weight || 0) > (current.weight || 0)) {
        if ((set.reps || 0) > (current.reps || 0)) {
          current = set;
        }
      }
    }
    return `${current.weight} x ${current.reps}`;
  }
}
