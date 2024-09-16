import { Routes } from '@angular/router';
import { Exemplo1Component } from './exemplo1/exemplo1.component';

export const routes: Routes = [
    { path: 'exemplo1', component: Exemplo1Component },
    { path: '', redirectTo: '/exemplo1', pathMatch: 'full' },
];
