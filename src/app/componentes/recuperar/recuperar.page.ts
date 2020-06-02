import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
 
  constructor(public loadingCtrl:LoadingController) { }
  
  ngOnInit() {
  }
  loading(){
    const loader = this.loadingCtrl.create({
      message: 'Por favor espere...',
      duration: 3000
    });
    
  }
}
