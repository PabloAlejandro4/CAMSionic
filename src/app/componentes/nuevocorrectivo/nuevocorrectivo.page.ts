import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController, AlertController } from '@ionic/angular';
import { FotosPage } from '../fotos/fotos.page';

@Component({
  selector: 'app-nuevocorrectivo',
  templateUrl: './nuevocorrectivo.page.html',
  styleUrls: ['./nuevocorrectivo.page.scss'],
})
export class NuevocorrectivoPage implements OnInit {
  area: string;
  actividad: string;
  tarea: string;
  criticidad: string;
  siniestro: boolean;
  imagenes: any;
  base64Image: string;
  constructor(private camera: Camera,
              private modalCtrl: ModalController) 
  {
    this.imagenes = [];
  }
  async hacerFoto() {
  
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    const result = await this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      //(<HTMLInputElement>document.getElementById('img')).src = this.base64Image;
      this.imagenes.push(this.base64Image);
    }, (err) => {
      console.log(err);
    });
  }
  guardar(){
    console.log(this.area);
    console.log(this.actividad);
    console.log(this.tarea);    
    console.log(this.criticidad);
    console.log(this.siniestro);
  }
  async verFotos(){
    const modal = await this.modalCtrl.create({
         component: FotosPage,
         componentProps: {
           fotos: this.imagenes
         }
     });

    return modal.present();
   }
  ngOnInit() {
  }

}
