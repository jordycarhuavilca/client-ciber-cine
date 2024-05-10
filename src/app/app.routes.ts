import { Routes } from '@angular/router';
import { FuncionesListComponent } from './funciones-list/funciones-list.component';
export const routes: Routes = [
  {
    path: 'add',
    loadComponent: () => FuncionesListComponent,
  },
  // {
  //   path: 'add',
  //   loadComponent: () => import('./funcione/funciones-form.component'),
  // },
];
