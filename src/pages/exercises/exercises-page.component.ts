import { Component, OnInit } from '@angular/core';
import { TopNavService } from '../../services/top-nav.service';
import { ExercisesPageNavComponent } from './exercises-nav.component';

@Component({
  standalone: false,
  selector: 'app-page-exercises',
  templateUrl: './exercises-page.component.html',
  styleUrl: './exercises-page.component.css',
})
export class ExercisesPageComponent implements OnInit {
  #topNavService: TopNavService;

  constructor(topNavService: TopNavService) {
    this.#topNavService = topNavService;
  }

  ngOnInit() {
    this.#topNavService.updateTitle('Exercises');
    this.#topNavService.setToolbar(ExercisesPageNavComponent);
  }

  ngOnDestroy(): void {
    this.#topNavService.resetToolbar();
  }
}
