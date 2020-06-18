import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RecuperarService } from '../servicios/recuperar.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  correoelectronico: string;
  constructor(public loadingCtrl: LoadingController, private recuperar: RecuperarService) { }
  
  async loading(){

    const loader = this.loadingCtrl.create({
      message: 'Por favor espere...',
      duration: 3000
    });
    (await loader).present();

    this.recuperar.EnviarCorreo(this.correoelectronico);
  }
  ngOnInit() {
  }

}
