import { Component } from '@angular/core';
import { TopNavService } from '../../services/top-nav.service';

@Component({
  standalone: false,
  selector: 'app-navigation-top',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {
  topNavService: TopNavService

  constructor(
    topNavService: TopNavService
  ) {
    this.topNavService = topNavService
  }
}
