import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ExercisesPageNavComponent } from './exercises-nav.component';
import { ExerciseListService } from '../../services/exercise-list.service';

@Component({
  standalone: false,
  selector: 'app-page-exercise',
  templateUrl: './exercises-page.component.html',
  styleUrl: './exercises-page.component.css',
})
export class ExercisesPageComponent {
  exerciseListService: ExerciseListService;
  exerciseList: WritableSignal<Array<string>>;

  constructor(exerciseListService: ExerciseListService) {
    this.exerciseListService = exerciseListService;
    this.exerciseList = signal(this.exerciseListService.exercises());
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
}
