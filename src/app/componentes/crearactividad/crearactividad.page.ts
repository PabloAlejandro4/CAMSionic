import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActividadService } from '../servicios/actividad.service';

@Component({
  selector: 'app-crearactividad',
  templateUrl: './crearactividad.page.html',
  styleUrls: ['./crearactividad.page.scss'],
})
export class CrearactividadPage implements OnInit {
  criticidad: string [] = ['Alta', 'Media', 'Baja'];
  nombre: string;
  constructor(private modalCtrl: ModalController, public alertCtrl: AlertController, public servicioActividad: ActividadService) { }
  async cancel(){
    this.modalCtrl.dismiss();
    
  }
  add(){
    this.servicioActividad.agregarActividad(this.nombre);
    this.nombre ='';
  }
  
  ngOnInit() {
  }

}
