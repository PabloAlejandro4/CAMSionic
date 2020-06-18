import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-confirmarcodigo',
  templateUrl: './confirmarcodigo.page.html',
  styleUrls: ['./confirmarcodigo.page.scss'],
})
export class ConfirmarcodigoPage implements OnInit {
  codigo: string;
  password: string;
  confirmacion: string;
  constructor( private router: Router) { }
 restablecer(){

  this.router.navigate(['login']);
 }
  ngOnInit() {
  }

}
