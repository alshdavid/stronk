import { Component } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';

@Component({
  standalone: false,
  selector: 'app-page-workout',
  templateUrl: './workout-page.component.html',
  styleUrl: './workout-page.component.css'
})
export class WorkoutPageComponent {
  #bottomNavService: BottomNavService

  constructor(
    bottomNavService: BottomNavService
  ) {
    this.#bottomNavService = bottomNavService
  }

  toggle() {
    this.#bottomNavService.toggle()
  }
}
