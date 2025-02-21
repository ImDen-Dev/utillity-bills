import { Routes } from '@angular/router';
import { MainLayoutComponent } from './share/layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('./pages/pages.routes').then(m => m.routes),
  },
];
