import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
import { Router, NavigationExtras} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogearService {
  url: string;
  user: any;
  constructor(private httpClient: HttpClient, private router: Router) 
  { this.url = environment.urlApi;
    this.user =[];
  }
  async Logear(email, password){
    return this.httpClient.post(this.url + 'login', {
      email,
       password
      }).subscribe(
          data => {
            console.log(data);
            this.user = data;
            environment.user = this.user.user;
            environment.password =  password; 
            console.log(environment.user);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Bienvenido',
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigate(['home' ]);
          },
          (err) => {
            console.log(err);
    
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Error',
              text: 'Usuario y/o contraseña Incorrecto',
              showConfirmButton: true
            });
          }
        );
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
              text: 'Se ha enviado tu contraseña',
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

