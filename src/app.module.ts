import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BackgroundWorkerService } from './services/background-worker.service';

import { routes } from './app.routes';
import { AppComponent } from './app.component';

import { BottomNavService } from './services/bottom-nav.service';

import { BottomNavComponent } from './partials/bottom-nav/bottom-nav.component';
import { TopNavComponent } from './partials/top-nav/top-nav.component';

import { ProfilePageComponent } from './pages/profile/profile-page.component';
import { ExercisesPageComponent } from './pages/exercises/exercises-page.component';
import { HistoryPageComponent } from './pages/history/history-page.component';
import { MeasurePageComponent } from './pages/measure/measure-page.component';
import { WorkoutPageComponent } from './pages/workout/workout-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    BottomNavComponent,
    ProfilePageComponent,
    ExercisesPageComponent,
    HistoryPageComponent,
    MeasurePageComponent,
    WorkoutPageComponent,
  ],
  providers: [
    BackgroundWorkerService,
    BottomNavService,
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
