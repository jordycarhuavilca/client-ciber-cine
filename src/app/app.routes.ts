import { Routes } from '@angular/router';
import { FuncionesListComponent } from './funciones/funciones.component';
export const routes: Routes = [
  {
    path: 'add',
    loadComponent: () => FuncionesListComponent,
  },
  {
    path: 'update',
    loadComponent: () => FuncionesListComponent,
  }
  // {
  //   path: 'add',
  //   loadComponent: () => import('./funcione/funciones-form.component'),
  // },
];
