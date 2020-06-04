import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
import { Router, NavigationExtras} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string;
  constructor(private httpClient: HttpClient, private router: Router) 
  { this.url = environment.urlApi;
  }
  async Logear(email, password){
    return this.httpClient.post(this.url + 'login', {
      email,
       password
      }).subscribe(
          data => {
            console.log(data);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Exito',
              text: 'Bienvenido',
              showConfirmButton: true
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
}
