import { Component, OnInit } from '@angular/core';
import { ExercisesPageNavComponent } from './exercises-nav.component';
import { ExerciseListService } from '../../services/exercise-list.service';

@Component({
  standalone: false,
  selector: 'app-page-exercises',
  templateUrl: './exercises-page.component.html',
  styleUrl: './exercises-page.component.css',
})
export class ExercisesPageComponent {
  exerciseListService: ExerciseListService;

  constructor(exerciseListService: ExerciseListService) {
    this.exerciseListService = exerciseListService;
  }
}
