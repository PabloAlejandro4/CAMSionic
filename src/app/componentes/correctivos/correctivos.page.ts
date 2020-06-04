import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { storage, initializeApp } from 'firebase';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-correctivos',
  templateUrl: './correctivos.page.html',
  styleUrls: ['./correctivos.page.scss'],
})
export class CorrectivosPage implements OnInit {
 //foto: any;
 //informacionImagen: any;
 empresa: string;
 mostrardiv: boolean;
  constructor(private camera: Camera,private httpClient: HttpClient) { 
    //initializeApp(environment.firebase);
this.mostrardiv = false;
  }
  r(){
    console.log('hola');
    this.mostrardiv = !this.mostrardiv;
  }
  hide(){
    this.mostrardiv=false;
  }
/*
  async hacerFoto() {
  
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    const result = await this.camera.getPicture(options).then((imageData) => {
      this.foto = 'data:image/jpeg;base64,' + imageData;
      this.informacionImagen = imageData;
    }, (err) => {
      console.log(err);
    });
  }
  guardarImg(){
    console.log(foto);
    this.imagenesService.guardarFoto(foto);
    this.imagenesService.obtenerFotos();
    const pictures = storage().ref('pictures/CAMS/');
    pictures.putString(this.foto, 'data_url');
    let urlI = pictures.getDownloadURL();

}

guardarFoto(){
  return this.httpClient.post('http://192.168.1.71:3000/uploadImg', {
  sampleFile: this.foto
}).subscribe(
      data => {
        console.log(data);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Exito' + data,
          showConfirmButton: true,          
        });
        //this.router.navigate(['tabs', 'tab1' ]);

      },
      (err) => {
        console.log(err);

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error',
          text: err.error,
          showConfirmButton: true         
        });

      }


    );
}

obtenerImg(){
  console.log('tomando...');
  const storageRef = storage().refFromURL('gs://pruebascams-a4e95.appspot.com/pictures/CAMS');
  storageRef.getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  (<HTMLInputElement>document.getElementById('img')).src = url;

  console.log(url);
  }).catch(function(error) {
    // Handle any errors
    console.log(error);
  });
  
}*/

  ngOnInit() {
  }

}
