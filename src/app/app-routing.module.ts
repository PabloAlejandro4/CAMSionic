import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mantenimiento',
    loadChildren: () => import('./mantenimiento/mantenimiento.module').then( m => m.MantenimientoPageModule)
  },
  {
    path: 'mantenimiento',
    loadChildren: () => import('./mantenimiento/mantenimiento.module').then( m => m.MantenimientoPageModule)
  },
  {
    path: 'correctivos',
    loadChildren: () => import('./componentes/correctivos/correctivos.module').then( m => m.CorrectivosPageModule)
  },
  {
    path: 'almacen',
    loadChildren: () => import('./componentes/almacen/almacen.module').then( m => m.AlmacenPageModule)
  },
  {
    path: 'administrativo',
    loadChildren: () => import('./componentes/administrativo/administrativo.module').then( m => m.AdministrativoPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./componentes/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./componentes/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./componentes/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'centrales',
    loadChildren: () => import('./componentes/centrales/centrales.module').then( m => m.CentralesPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./componentes/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'actores',
    loadChildren: () => import('./componentes/actores/actores.module').then( m => m.ActoresPageModule)
  },
  {
    path: 'archivo',
    loadChildren: () => import('./componentes/archivo/archivo.module').then( m => m.ArchivoPageModule)
  },
  {
    path: 'tutoriales',
    loadChildren: () => import('./componentes/tutoriales/tutoriales.module').then( m => m.TutorialesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
