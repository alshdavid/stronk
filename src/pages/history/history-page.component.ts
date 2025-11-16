import { Component, OnInit } from '@angular/core';
import { TopNavService } from '../../services/top-nav.service';
import { HistoryPageNavComponent } from './history-nav.component';
import { Workout, WorkoutsService } from '../../services/workouts.service';

@Component({
  standalone: false,
  selector: 'app-page-history',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})
export class HistoryPageComponent implements OnInit {
  #topNavService: TopNavService;
  #workoutsService: WorkoutsService;
  exercises: Array<Workout>;

  constructor(topNavService: TopNavService, workoutsService: WorkoutsService) {
    this.#topNavService = topNavService;
    this.#workoutsService = workoutsService;
    this.exercises = [];
  }

  async ngOnInit() {
    this.#topNavService.updateTitle('History');
    this.#topNavService.setToolbar(HistoryPageNavComponent);
    this.exercises = await Array.fromAsync(this.#workoutsService.listWorkouts());
  }

  ngOnDestroy(): void {
    this.#topNavService.resetToolbar();
  }
}
