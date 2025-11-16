import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BackgroundWorkerService } from './services/background-worker.service';
import { CommonModule } from '@angular/common';

import { routes } from './app.routes';
import { AppComponent } from './app.component';

import { BottomNavService } from './services/bottom-nav.service';
import { TopNavService } from './services/top-nav.service';
import { CurrentWorkoutService } from './services/current-workout.service';
import { CurrentWorkoutPanelService } from './services/current-workout-panel.service';

import { BottomNavComponent } from './partials/bottom-nav/bottom-nav.component';
import { TopNavComponent } from './partials/top-nav/top-nav.component';

import { ProfilePageComponent } from './pages/profile/profile-page.component';
import { ProfilePageNavComponent } from './pages/profile/profile-nav.component';
import { ExercisesPageComponent } from './pages/exercises/exercises-page.component';
import { HistoryPageComponent } from './pages/history/history-page.component';
import { MeasurePageComponent } from './pages/measure/measure-page.component';
import { WorkoutPageComponent } from './pages/workout/workout-page.component';
import { ExercisesPageNavComponent } from './pages/exercises/exercises-nav.component';
import { HistoryPageNavComponent } from './pages/history/history-nav.component';
import { MeasurePageNavComponent } from './pages/measure/measure-nav.component';
import { WorkoutPageNavComponent } from './pages/workout/workout-nav.component';
import { WorkoutCurrentPageComponent } from './pages/workout-current/workout-current-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    BottomNavComponent,
    ProfilePageComponent,
    ProfilePageNavComponent,
    ExercisesPageComponent,
    ExercisesPageNavComponent,
    HistoryPageComponent,
    HistoryPageNavComponent,
    MeasurePageComponent,
    MeasurePageNavComponent,
    WorkoutPageComponent,
    WorkoutPageNavComponent,
    WorkoutCurrentPageComponent,
  ],
  providers: [
    BackgroundWorkerService,
    BottomNavService,
    TopNavService,
    CurrentWorkoutPanelService,
    CurrentWorkoutService,
  ],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(_workerService: BackgroundWorkerService) {}
}
