import { Injectable, signal, Signal, WritableSignal } from '@angular/core';

@Injectable()
export class BottomNavService {
  visible: WritableSignal<boolean>;

  constructor() {
    this.visible = signal(true);
  }

  toggle() {
    this.visible.update((v) => !v);
  }

  show() {
    this.visible.update(() => true);
  }

  hide() {
    this.visible.update(() => false);
  }
}
