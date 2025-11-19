import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'landing-page',
    loadComponent: () =>
      import('./components/landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      ),
  }
];
