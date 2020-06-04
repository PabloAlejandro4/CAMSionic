import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  url: string; 
  constructor(private httpClient: HttpClient,) 
  { this.url = environment.urlApi;
  }
  async GuardarRegistro(name, alias, expediente, telefono, email,password ){
    return this.httpClient.post(this.url + 'user', {
      name,
      alias,
      expediente,
      telefono,
      email,
      password
      //sampleFile: base64Image 
      }).subscribe(
          data => {
            console.log(data);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Exito' + data,
              showConfirmButton: true
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
  async GuardarRegistroImagen(name, alias, expediente, telefono, email,password, base64Image ){
    return this.httpClient.post(this.url + 'userImg', {
      name,
      alias,
      expediente,
      telefono,
      email,
      password,
      base64Image
      //sampleFile: base64Image 
      }).subscribe(
          data => {
            console.log(data);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Exito' + data,
              showConfirmButton: true
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
}
