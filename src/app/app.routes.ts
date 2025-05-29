import { Routes } from '@angular/router';

import { PrincipalComponent } from './public/principal.component';
import { AdminPrincipalComponent } from './admin/admin-principal.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'admin', component: AdminPrincipalComponent },
  { path: '**', redirectTo: '' } // Ruta por defecto si no existe  
];
