import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFireGuard } from './guards/auth-fire.guard';

import { InsumosServiciosComponent } from './components/insumos-servicios/insumos-servicios.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { PresupuestosComponent } from './components/presupuestos/presupuestos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { FullComponent } from './layouts/full/full.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { SolicitudesadminComponent } from './components/solicitudesadmin/solicitudesadmin.component';
import { SendEmailComponent } from './auth/send-email/send-email.component';

//const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['iniciar-sesion']);
//const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);
const routes: Routes = [
    {
      path: '',
      component: FullComponent,
      children: [
        {path: '', redirectTo: '/inicio', pathMatch: 'full' },
        {path: 'inicio', component:HomeComponent},
        {path: 'nosotros', component:NosotrosComponent},
        {path: 'verification-email', component:SendEmailComponent},

        {
          path: 'clientes',
          component:ClientesComponent,
          canActivate: [AuthFireGuard]
        },
        {
          path: 'dashboard',
          component:DashboardComponent,
          canActivate: [AuthFireGuard]
        },
        {
          path: 'insumos-servicios',
          component:InsumosServiciosComponent,
          canActivate: [AuthFireGuard]
        },
        {
          path: 'solicitudes',
          component:SolicitudesComponent,
          canActivate: [AuthFireGuard]
        },
        {
          path: 'adminsolicitudes',
          component:SolicitudesadminComponent,
          canActivate: [AuthFireGuard]
        },
        {
          path: 'presupuestos',
          component:PresupuestosComponent,
          canActivate: [AuthFireGuard]
        },
        {
          path: 'iniciar-sesion',
          loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)
        },
        {
          path: 'registro',
          component:RegistroComponent
        }
      ]
    },
    {
      path: '**',
      redirectTo: '/inicio'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
