import { Component, OnInit,Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editaractividad',
  templateUrl: './editaractividad.page.html',
  styleUrls: ['./editaractividad.page.scss'],
})
export class EditaractividadPage implements OnInit {
  @Input() Actividad: string;
  criticidad: string;
  mostrarContenido: boolean;
  items: any;
  tareas: any;
  constructor(private modalCtrl: ModalController,public alertCtrl: AlertController) {
    console.log(this.Actividad); 
    this.items = [0];
    this.tareas =[{
      nombre: '',
      criticidad: 'media'
    
    }
    ];
  }
  
  async ADD(){
    this.items.push(0);
    this.tareas.push({
      nombre: '',
      criticidad: 'media'
    })

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


  ngOnInit() {
  }

}
