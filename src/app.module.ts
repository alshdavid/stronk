import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BackgroundWorkerService } from './services/background-worker.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  providers: [
    BackgroundWorkerService,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
  constructor(
    _workerService: BackgroundWorkerService,
  ) {}
}
