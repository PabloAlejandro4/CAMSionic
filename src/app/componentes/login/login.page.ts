import { Component, OnInit } from '@angular/core';
import { LogearService } from '../servicios/Logear.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string;
  password: string;


  constructor(public log: LogearService) { }

logear(){
  this.log.Logear(this.usuario, this.password);
}

  ngOnInit() {
  }
  
}
