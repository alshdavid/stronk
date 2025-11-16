import { Injectable, signal, Signal, WritableSignal } from '@angular/core';

@Injectable()
export class BottomNavService {
  visible: WritableSignal<boolean>;
  enabled: WritableSignal<boolean>;

  constructor() {
    this.visible = signal(true);
    this.enabled = signal(true);
  }

  disable() {
    this.enabled.update(() => false);
  }

  enable() {
    this.enabled.update(() => true);
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
