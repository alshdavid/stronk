import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  standalone: false,
  selector: 'app-page-settings',
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css',
})
export class SettingsPageComponent {
  #storageService: StorageService;

  constructor(storageService: StorageService) {
    this.#storageService = storageService;
  }

  async clearStorage() {
    await this.#storageService.clear();
    globalThis.localStorage.clear();
  }
}
