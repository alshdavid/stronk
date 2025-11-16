import { Component, OnInit } from '@angular/core';
import { Workout, WorkoutsService } from '../../services/workouts.service';
import { BottomNavService } from '../../services/bottom-nav.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-page-workout-detail',
  templateUrl: './workout-detail-page.component.html',
  styleUrl: './workout-detail-page.component.css',
})
export class WorkoutDetailPageComponent implements OnInit {
  #bottomNavService: BottomNavService;
  #workoutsService: WorkoutsService;
  #activatedRoute: ActivatedRoute;
  workouts: Array<Workout>;

  public get id() {
    return this.#activatedRoute.snapshot.params['id'];
  }

  constructor(
    activatedRoute: ActivatedRoute,
    bottomNavService: BottomNavService,
    workoutsService: WorkoutsService,
  ) {
    this.#activatedRoute = activatedRoute;
    this.#bottomNavService = bottomNavService;
    this.#workoutsService = workoutsService;
    this.workouts = [];
  }

  async ngOnInit() {
    this.#bottomNavService.hide();
    console.log(this.id);
  }

  ngOnDestroy(): void {
    this.#bottomNavService.show();
  }
}
