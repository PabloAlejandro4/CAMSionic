import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule)
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
  },
  {
    path: 'registro',
    loadChildren: () => import('./componentes/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./componentes/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'actividad',
    loadChildren: () => import('./componentes/actividad/actividad.module').then( m => m.ActividadPageModule)
  },
  {
    path: 'crearactividad',
    loadChildren: () => import('./componentes/crearactividad/crearactividad.module').then( m => m.CrearactividadPageModule)
  },
  {
    path: 'mantenimiento',
    loadChildren: () => import('./componentes/mantenimiento/mantenimiento.module').then( m => m.MantenimientoPageModule)
  },
  {
    path: 'editaractividad',
    loadChildren: () => import('./componentes/editaractividad/editaractividad.module').then( m => m.EditaractividadPageModule)
  },
  {
    path: 'codigo',
    loadChildren: () => import('./componentes/confirmarcodigo/confirmarcodigo.module').then( m => m.ConfirmarcodigoPageModule)
  },  {
    path: 'permisos',
    loadChildren: () => import('./componentes/permisos/permisos.module').then( m => m.PermisosPageModule)
  },
  {
    path: 'nuevocorrectivo',
    loadChildren: () => import('./componentes/nuevocorrectivo/nuevocorrectivo.module').then( m => m.NuevocorrectivoPageModule)
  },
  {
    path: 'fotos',
    loadChildren: () => import('./componentes/fotos/fotos.module').then( m => m.FotosPageModule)
  }








];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
