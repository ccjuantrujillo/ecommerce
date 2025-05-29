import { Routes } from '@angular/router';

import { DashboardComponent } from './admin/dashboard.component';
import { PrincipalComponent } from './public/principal.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'admin', component: DashboardComponent },
  { path: '**', redirectTo: '' } // Ruta por defecto si no existe  
];
