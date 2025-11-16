import { Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile/profile-page.component';
import { ExercisesPageComponent } from './pages/exercises/exercises-page.component';
import { HistoryPageComponent } from './pages/history/history-page.component';
import { MeasurePageComponent } from './pages/measure/measure-page.component';
import { WorkoutPageComponent } from './pages/workout/workout-page.component';
import { WorkoutCurrentPageComponent } from './pages/workout-current/workout-current-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  {
    title: 'Exercises',
    pathMatch: 'full',
    path: 'exercises',
    component: ExercisesPageComponent,
  },
  {
    title: 'History',
    pathMatch: 'full',
    path: 'history',
    component: HistoryPageComponent,
  },
  {
    title: 'Measure',
    pathMatch: 'full',
    path: 'measure',
    component: MeasurePageComponent,
  },
  {
    title: 'Profile',
    pathMatch: 'full',
    path: 'profile',
    component: ProfilePageComponent,
  },
  {
    title: 'Workout',
    pathMatch: 'full',
    path: 'workout',
    component: WorkoutPageComponent,
  },
  {
    title: 'Workout Current',
    pathMatch: 'full',
    path: 'workout-current',
    component: WorkoutCurrentPageComponent,
  },
];
