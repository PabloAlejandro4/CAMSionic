import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import { Chart } from 'chart.js';
import { LoadingController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage implements OnInit {
  @ViewChild('barCanvas') barCanvas: ElementRef;
  @ViewChild('doughnutCanvas') doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas') lineCanvas: ElementRef;

  public barChart: Chart;
  public doughnutChart: Chart;
  public lineChart: Chart;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
 valor: string;
 valorGuardado: string;
 enLinea: boolean;
  constructor(private menu: MenuController, private storage: Storage, 
              public loadingController: LoadingController,
              private router: Router
    ) {
    this.valor = '';
    this.valorGuardado = '';

  }
  async openMenu() {
    await this.menu.open();
  }
  /*
  async guardar(){
    this.storage.set('value', this.valor);

  }
  async obtener(){
    this.storage.get('value').then((val) => {
      console.log('Your age is', val);
      this.valorGuardado = val;
      
    });
  }
  
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
    toast.message = 'Sin Conexion a internet';
    toast.duration = 2000;
  
    document.body.appendChild(toast);
    return toast.present();
  }*/
  ngOnInit(){
    this.presentLoading();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor Espere...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.iniciarCharts();
  }
  iniciarCharts(){
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

 
    
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      }
    });

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });

  }
    cerrarSesion(){
      console.log('sesion Cerrada');
      Swal.fire({
        title: 'Estas Seguro?',
        text: 'Estas apunto de cerrar tu sesion',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cerrar'
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['login']);
          environment.user = {
            name: '',
            alias: '',
            expediente: '',
            telefono: '',
            email: '',
            area: '',
            cm: ''
          };
          environment.password = '';
          Swal.fire({
            title: 'Nos Vemos pronto!',
            timer: 1500,
            showConfirmButton: false
          }
          );
        }
      });
    }
  
}
