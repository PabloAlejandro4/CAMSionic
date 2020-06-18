import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.page.html',
  styleUrls: ['./actores.page.scss'],
})
export class ActoresPage implements OnInit {
 enLinea: boolean;
  constructor(private network: Network) { }
  async checarRed(){
    const disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.enLinea = false;
      this.offLineToast();
      
    });

    const connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      this.enLinea = true;
      this.onLineToast();
      
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
          this.enLinea = true;
          this.onLineToast();
        }
      }, 3000);
    });
  }
  async onLineToast() {
    const toast = document.createElement('ion-toast');
    toast.message = 'Conectado a Internet';
    toast.duration = 2000;
  
    document.body.appendChild(toast);
    return toast.present();
  }
  async offLineToast() {
    const toast = document.createElement('ion-toast');
    toast.message = 'Sin Conexion a Internet';
    toast.duration = 2000;
  
    document.body.appendChild(toast);
    return toast.present();
  }
  ngOnInit() {
  }

}
