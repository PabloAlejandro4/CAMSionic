import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationExtras} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }
redirectHome(){

}
cerrarSesion(){
  console.log('sesion Cerrada');
  Swal.fire({
    title: 'Estas Seguro?',
    text: 'Estas apunto de cerrar tu sesion',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Cerrar'
  }).then((result) => {
    if (result.value) {
      this.router.navigate(['login']);
      Swal.fire(
        'Sesion Cerrada',
        'Nos vemos pronto!',
        'success'
      );
    }
  });
}
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
