import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'form',
        loadComponent: () => import('./pages/first-interview/first-interview.component').then(c => c.FirstInterviewComponent˜)
    }
    
];
