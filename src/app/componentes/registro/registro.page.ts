import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { RegistroService } from '../servicios/registro.service';
import Swal from 'sweetalert2';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage  {
  alias: string;
  nombre; string;
  apellidos: string;
  categoria: string;
  expediente: string;
  telefono: string;
  cm: string;
  correoelectronico: string;
  password: string;
  confirmacion: string;
  empresa: string;
  base64Image: any;
  constructor(private camera: Camera, public registroService: RegistroService, public actionSheetController: ActionSheetController) { 
    this.base64Image = '';
    this.empresa = '';
    this.categoria = '';
    this.cm = '';
    this.alias = '';
    this.nombre = '';
    this.apellidos = '';
    this.correoelectronico = '';
    this.password = '';
    this.confirmacion = '';
    this.telefono = '';
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Completar con',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camara',
        icon: 'camera',
        handler: () => {
          console.log('Share clicked');
          this.hacerFoto();
        }
      }, {
        text: 'Galeria',
        icon: 'image',
        handler: () => {
          console.log('Favorite clicked');
          this.fotoGaleria();
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

async fotoGaleria(){
  const optionsGallery: CameraOptions = {
    
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE }

  this.camera.getPicture(optionsGallery).then((imageData) => {
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
     (<HTMLInputElement>document.getElementById('img')).src = this.base64Image;

   }, (err) => {
    // Handle error
    console.log(err)
   });
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
    (<HTMLInputElement>document.getElementById('img')).src = this.base64Image;

  }, (err) => {
    console.log(err);
  });
}
async quitarImagen(){
  this.base64Image = '';
  (<HTMLInputElement>document.getElementById('img')).src = 'assets/images/mp-image.png';

}

async validar(){
  /*if(  this.cm || this.alias || this.nombre  || this.correoelectronico
    || this.password || this.confirmacion || this.telefono === ''){
    console.log('completa los campos');
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Invalido',
      text: 'Por favor completa todos los campos',
      showConfirmButton: true         
    });
        }else{
          console.log('listo');
          this.guardar();
        }*/ this.guardar();
}

  async guardar(){
    //this.registroService.GuardarRegistro(this.base64Image);
    console.log(this.alias);
    console.log(this.nombre);
    console.log(this.empresa);
    console.log(this.apellidos);
    console.log(this.expediente);
    console.log(this.telefono);
    console.log(this.cm);
    console.log(this.categoria);
    console.log(this.correoelectronico);
    console.log(this.password);
    console.log(this.confirmacion);

  
    if (this.password === this.confirmacion){
      console.log('lisot');
      if (this.base64Image === ''){
        console.log('registro');
        this.registroService.GuardarRegistro(this.nombre,this.alias,this.expediente,this.telefono,this.correoelectronico,this.password)
       }else{
        console.log('lo');
        // tslint:disable-next-line: max-line-length
        this.registroService.GuardarRegistroImagen(this.nombre,this.alias,this.expediente,this.telefono,this.correoelectronico,this.password,this.base64Image)

       }

    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Contraseña invalida',
        text: 'Por favor confirma tu contraseña',
        showConfirmButton: true         
      });
    }







  
  }
}
