import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BackgroundWorkerService } from './services/background-worker.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { AppComponent } from './app.component';

import { BottomNavService } from './services/bottom-nav.service';
import { CurrentWorkoutService } from './services/current-workout.service';
import { CurrentWorkoutPanelService } from './services/current-workout-panel.service';
import { StorageService } from './services/storage.service';
import { WorkoutsService } from './services/workouts.service';

import { BottomNavComponent } from './partials/bottom-nav/bottom-nav.component';
import { TopNavBackComponent, TopNavComponent } from './partials/top-nav/top-nav.component';

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
import { WorkoutDetailPageComponent } from './pages/workout-detail/workout-detail-page.component';
import { WorkoutDetailPageNavComponent } from './pages/workout-detail/workout-detail-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    TopNavBackComponent,
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
    WorkoutDetailPageComponent,
    WorkoutDetailPageNavComponent,
  ],
  providers: [
    BackgroundWorkerService,
    BottomNavService,
    CurrentWorkoutPanelService,
    CurrentWorkoutService,
    StorageService,
    WorkoutsService,
  ],
  imports: [BrowserModule, CommonModule, FormsModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(_workerService: BackgroundWorkerService) {}
}
