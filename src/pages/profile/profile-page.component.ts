import { Component } from '@angular/core';
import { BottomNavService } from '../../services/bottom-nav.service';
import { StorageService } from '../../services/storage.service';

@Component({
  standalone: false,
  selector: 'app-page-profile',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {
  #storageService: StorageService;

  constructor(storageService: StorageService) {
    this.#storageService = storageService;
  }

  async clearStorage() {
    await this.#storageService.clear();
    globalThis.localStorage.clear();
  }
}
