import { Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile/profile-page.component';
import { ExercisesPageComponent } from './pages/exercises/exercises-page.component';
import { HistoryPageComponent } from './pages/history/history-page.component';
import { MeasurePageComponent } from './pages/measure/measure-page.component';
import { WorkoutPageComponent } from './pages/workout/workout-page.component';
import { WorkoutCurrentPageComponent } from './pages/workout-current/workout-current-page.component';
import { WorkoutDetailPageComponent } from './pages/workout-detail/workout-detail-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  {
    title: 'Stronk - Exercises',
    pathMatch: 'full',
    path: 'exercises',
    component: ExercisesPageComponent,
  },
  {
    title: 'Stronk - History',
    pathMatch: 'full',
    path: 'history',
    component: HistoryPageComponent,
  },
  {
    title: 'Stronk - Workout Detail',
    pathMatch: 'full',
    path: 'workout/:id',
    component: WorkoutDetailPageComponent,
  },
  {
    title: 'Stronk - Measure',
    pathMatch: 'full',
    path: 'measure',
    component: MeasurePageComponent,
  },
  {
    title: 'Stronk - Profile',
    pathMatch: 'full',
    path: 'profile',
    component: ProfilePageComponent,
  },
  {
    title: 'Stronk - Workout',
    pathMatch: 'full',
    path: 'workout',
    component: WorkoutPageComponent,
  },
  {
    title: 'Stronk - Workout Current',
    pathMatch: 'full',
    path: 'workout-current',
    component: WorkoutCurrentPageComponent,
  },
];
