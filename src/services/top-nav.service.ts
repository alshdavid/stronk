import { Component, ComponentRef, Injectable, Signal, ViewContainerRef } from '@angular/core';

@Injectable()
export class TopNavService {
  title: string;
  #vcr?: Signal<ViewContainerRef | undefined>;
  #componentRef?: ComponentRef<unknown>;

  constructor() {
    this.title = '';
  }

  initOutlet(outlet: Signal<ViewContainerRef | undefined>) {
    this.#vcr = outlet;
  }

  setToolbar<T extends new (...params: Array<any>) => Component>(
    target: T,
    options?: Parameters<ViewContainerRef['createComponent']>['1'],
  ): ComponentRef<T> | undefined {
    if (options !== undefined && typeof options !== 'object') {
      throw new Error('Deprecated');
    }
    const vcr = this.#vcr?.();
    vcr?.clear();
    this.resetToolbar();
    const componentRef = vcr?.createComponent(target, options);
    this.#componentRef = componentRef;
    return componentRef as any;
  }

  resetToolbar() {
    this.#componentRef?.destroy();
  }

  updateTitle(newTitle: string) {
    this.title = newTitle;
  }
}
