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
import { SQLiteService } from './services/sqlite.service';

import { BottomNavComponent } from './partials/bottom-nav/bottom-nav.component';
import { TopNavBackComponent, TopNavComponent } from './partials/top-nav/top-nav.component';

import { ProfilePageComponent } from './pages/profile/profile-page.component';
import { ProfilePageNavComponent } from './pages/profile/profile-nav.component';
import { ExercisesPageComponent } from './pages/exercises/exercises-page.component';
import { HistoryPageComponent } from './pages/history/history-page.component';
import { SettingsPageComponent } from './pages/settings/settings-page.component';
import { MeasurePageComponent } from './pages/measure/measure-page.component';
import { WorkoutPageComponent } from './pages/workout/workout-page.component';
import { ExercisesPageNavComponent } from './pages/exercises/exercises-nav.component';
import { HistoryPageNavComponent } from './pages/history/history-nav.component';
import { MeasurePageNavComponent } from './pages/measure/measure-nav.component';
import { WorkoutPageNavComponent } from './pages/workout/workout-nav.component';
import { WorkoutCurrentPageComponent } from './pages/workout-current/workout-current-page.component';
import { WorkoutDetailPageComponent } from './pages/workout-detail/workout-detail-page.component';
import { WorkoutDetailPageNavComponent } from './pages/workout-detail/workout-detail-nav.component';
import { ExerciseListService } from './services/exercise-list.service';
import { ExercisePickerPageComponent } from './pages/exercise-picker/exercise-picker-page.component';

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
    ExercisePickerPageComponent,
    SettingsPageComponent,
  ],
  providers: [
    BackgroundWorkerService,
    BottomNavService,
    CurrentWorkoutPanelService,
    CurrentWorkoutService,
    StorageService,
    WorkoutsService,
    ExerciseListService,
    SQLiteService,
  ],
  imports: [BrowserModule, CommonModule, FormsModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    _workerService: BackgroundWorkerService,
    _SQLiteService: SQLiteService,
  ) {
    (async () => {
      const db = _SQLiteService

      await db.exec(
        `CREATE TABLE IF NOT EXISTS test_table ("id" TEXT UNIQUE, "val" TEXT)`
      );

      await db.exec("INSERT INTO test_table (id, val) VALUES ('1', 'v1')");
      await db.exec("INSERT INTO test_table (id, val) VALUES ('2', 'v2')");
      await db.exec("INSERT INTO test_table (id, val) VALUES ('3', 'v3')");

      const result = await db.exec("SELECT * FROM test_table");
      console.log(result);
    })()
  }
}
