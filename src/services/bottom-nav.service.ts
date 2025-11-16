import { Injectable } from '@angular/core';

@Injectable()
export class BottomNavService {
  visible: boolean;

  constructor() {
    this.visible = true;
  }

  toggle(): Promise<void> {
    this.visible = !this.visible;
    return new Promise((res) => setTimeout(res, 150));
  }

  show(): Promise<void> {
    this.visible = true;
    return new Promise((res) => setTimeout(res, 150));
  }

  hide(): Promise<void> {
    this.visible = false;
    return new Promise((res) => setTimeout(res, 150));
  }
}
