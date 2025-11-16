
import { Injectable } from '@angular/core';

@Injectable()
export class BackgroundWorkerService {
  constructor() {
    const worker = new Worker(new URL('../worker/background.worker', import.meta.url));
    worker.onmessage = ({ data }) => {
      console.log({data})
    };
    worker.postMessage("Hello World")
  }
}
