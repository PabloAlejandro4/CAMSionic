import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.page.html',
  styleUrls: ['./fotos.page.scss'],
})
export class FotosPage implements OnInit {
  @Input() fotos: any;
  imagenes: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(private modalCtrl: ModalController,
              public loadingController: LoadingController
    ) {
    //this.fotos = [0,0,0]
    this.imagenes = [];
   }
   cerrar(){
    this.modalCtrl.dismiss();
   }
   async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor Espere...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.imagenes = this.fotos;
  }
  
  
  ngOnInit() {
    this.presentLoading();
  }

}
