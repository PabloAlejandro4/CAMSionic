import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  editar: boolean;
  user = {
    name: '',
    alias: '',
    expediente: '',
    telefono: '',
    email: '',
    area: '',
    cm: ''

  };
  constructor() { 
    this.editar = false;
    this.user = environment.user;
  }

  editarUsuario(){
     if(this.editar){
      console.log('validar');
      this.validarAlert();
     }
   }

  validarAlert(){
      Swal.fire({
      title: 'Ingresa tu vieja contraseña para continuar',
      input: 'password',
      inputAttributes: {
        autocapitalize: 'off'
      },
      confirmButtonText: 'Aceptar',
      showLoaderOnConfirm: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Escribe tu contraseña'
        }
      },
      preConfirm: (password) => {
        if(password === environment.password){
          Swal.fire({
            icon: 'success',
            title: `Correcto`,
            timer: 1000,
            showConfirmButton: false
          });
        }else{
          Swal.fire({
            icon: 'error',
            title: `Contraseña incorrecta`,
            timer: 1000,
            showConfirmButton: false
          });
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
  }
  ngOnInit() {
    console.log( this.user);
  }

}
