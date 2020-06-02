import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  correoelectronico: string;
  password: string;
  confirmacion: string;
  empresa: string;
  constructor() { }

  ngOnInit() {
  }

}
