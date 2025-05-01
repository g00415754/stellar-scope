import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage),
  },
  {
    path: 'astronomical-objects',
    loadComponent: () => import('./pages/astronomical-objects/astronomical-objects.page').then(m => m.AstronomicalObjectsPage),
  },
  {
    path: 'astronomical-events',
    loadComponent: () => import('./pages/astronomical-events/astronomical-events.page').then(m => m.AstronomicalEventsPage),
  },
  {
    path: 'sun-moon-info',
    loadComponent: () => import('./pages/sun-moon-info/sun-moon-info.page').then(m => m.SunMoonInfoPage),
  },
];
