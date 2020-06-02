import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  correoelectronico: string;
  constructor(public loadingCtrl: LoadingController, private router: Router) { }
  
  loading(){
    Swal.fire({
      title: 'Listo',
      text: 'Se ha enviado un correo a tu cuenta con tu contraseña',
      icon: 'success',
      showConfirmButton: true
    });
    this.router.navigate(['login']);

    const loader = this.loadingCtrl.create({
      message: 'Por favor espere...',
      duration: 3000
    });
    
  }
  ngOnInit() {
  }

}
