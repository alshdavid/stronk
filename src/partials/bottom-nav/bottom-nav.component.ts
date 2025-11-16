import { Component } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';

@Component({
  standalone: false,
  selector: 'app-navigation-bottom',
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.css',
})
export class BottomNavComponent {
  bottomNavService: BottomNavService;
  constructor(bottomNavService: BottomNavService) {
    this.bottomNavService = bottomNavService;
  }
}
