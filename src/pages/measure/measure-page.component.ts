import { Component } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';

@Component({
  standalone: false,
  selector: 'app-page-measure',
  templateUrl: './measure-page.component.html',
  styleUrl: './measure-page.component.css'
})
export class MeasurePageComponent {
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
