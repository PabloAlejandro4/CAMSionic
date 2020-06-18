import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
import { Router, NavigationExtras} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecuperarService {
  url: string;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.url = environment.urlApi;
   }
  async EnviarCorreo(valor){
    return this.httpClient.post(this.url + 'login/forgot', {
      parametro: 'email',
      valor
      }).subscribe(
          data => {
            console.log(data);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Listo',
              text: 'Se ha enviado tu contraseña, esto puede tardar unos minutos ',
              showConfirmButton: true
            });
            this.router.navigate(['login' ]);
          },
          (err) => {
            console.log(err);
    
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Error',
              text: '',
              showConfirmButton: true
            });
          }
        );
  }
}
