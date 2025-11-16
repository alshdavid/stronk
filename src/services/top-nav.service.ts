
import { Injectable } from '@angular/core';

@Injectable()
export class TopNavService {
  title: string

  constructor() {
    this.title = ''
  }

  updateTitle(newTitle: string) {
    this.title = newTitle
  }
}
