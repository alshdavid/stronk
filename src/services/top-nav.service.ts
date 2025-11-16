import { Component, ComponentRef, Injectable, Signal, ViewContainerRef } from '@angular/core';

@Injectable()
export class TopNavService {
  title: string;
  #vcrResolve: (value: Signal<ViewContainerRef | undefined>) => void;
  #vcr: Promise<Signal<ViewContainerRef | undefined>>;
  #componentRef?: ComponentRef<unknown>;

  constructor() {
    this.title = '';
    this.#vcrResolve = () => {};
    this.#vcr = new Promise((res) => {
      this.#vcrResolve = res;
    });
  }

  initOutlet(outlet: Signal<ViewContainerRef | undefined>) {
    this.#vcrResolve(outlet);
  }

  async setToolbar<T extends new (...params: Array<any>) => Component>(
    target: T,
    options?: Parameters<ViewContainerRef['createComponent']>['1'],
  ): Promise<ComponentRef<T> | undefined> {
    if (options !== undefined && typeof options !== 'object') {
      throw new Error('Deprecated');
    }
    const vcr = (await this.#vcr)?.();
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
