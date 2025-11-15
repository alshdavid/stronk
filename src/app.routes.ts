import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    title: "Home Page",
    pathMatch: 'full',
    path: '',
    component: HomePageComponent,
  }
];
