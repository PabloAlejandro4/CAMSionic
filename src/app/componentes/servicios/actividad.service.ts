import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  actividades: any;
  constructor( private storage: Storage) { 
    this.actividades = [];
  }


  agregarActividad(nombre){
     this.actividades.push({
       nombre
     });
     console.log(this.actividades);
     
  }
  guardar(){
    this.storage.set('actividades', this.actividades);
  }
  
}
