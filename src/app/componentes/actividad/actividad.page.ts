import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { CrearactividadPage } from '../crearactividad/crearactividad.page';
import { ActividadService } from '../servicios/actividad.service';
import { EditaractividadPage } from '../editaractividad/editaractividad.page';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {
  criticidad: string;
  mostrarContenido: boolean;
  items: any;
  tareas: any;
  actividades: any;

  constructor(private modalCtrl: ModalController,
              public alertCtrl: AlertController, 
              public servicioActividad: ActividadService) 
   {
    this.mostrarContenido = false;
    this.items = [0];
    this.tareas = [{
      nombre: '',
      criticidad: ''
    }
    ];
    this.actividades =[];
    this.initializeItems();
   }
    async ADD(){
      this.items.push(0);
      this.tareas.push({
        nombre: '',
        criticidad: ''
      });

    }

    guardar(){
      console.log(this.tareas);
    }
   async salvar(posicion){
  console.log(this.tareas[posicion].nombre);
  console.log(this.tareas[posicion].criticidad);
   }
   quit(posicion){
     this.items.splice(posicion);
     this.tareas.splice(posicion);
   }
   async alert(){
    const alert = await this.alertCtrl.create({
      header: 'Atencion',
      message: 'Todos los movimientos que ha realizado seran descartados. ¿Confirma que desea proceder?',
      buttons: [
        {
          text:'Descartar cambios',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.modalCtrl.dismiss();
          }
          },
          {
            text: 'Seguir editando',
            handler: (blah) =>{
              console.log('Seguir editando');
            }

          }
      ]
    });
    await alert.present();
   }

  async crearActividad(){
    const modal = await this.modalCtrl.create({
         component: CrearactividadPage,
         componentProps: {
           Actividad: 'Grupo electrogeno'
         }
     });

    return modal.present();
   }
   async editarActividad(nombre){
    const modal = await this.modalCtrl.create({
      component: EditaractividadPage,
      componentProps: {
        Actividad: nombre
      }
  });
    return modal.present();
  }

   Mostrar(){
     this.mostrarContenido = !this.mostrarContenido;
   }
   getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.actividades = this.actividades.filter((actividad) => {
        return (actividad.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
  async initializeItems(){
   /* this.actividades = ['Amsterdam',
    'Bogota',
    'Buenos Aires',
    'Cairo',
    'Dhaka',
    'Edinburgh',
    'Geneva',
    'Genoa',
    'Glasglow',
    'Hanoi',
    'Hong Kong',
    'Islamabad',
    'Istanbul',
    'Jakarta',
    'Kiel'];
    console.log(this.actividades);*/
    this.actividades = [];
    for (let act of this.servicioActividad.actividades){
      this.actividades.push(act.nombre);
    }
    console.log(this.actividades);
  }

  ngOnInit() {
  }

}
