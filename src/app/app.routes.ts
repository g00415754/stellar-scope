import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { HomePage } from './pages/home/home.page';  // Import HomePage
import { Router } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        component: HomePage,  // Set HomePage as the default route
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
      
    ],
  },
];
