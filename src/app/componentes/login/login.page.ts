import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/Login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string;
  password: string;


  constructor(public login: LoginService) { }

logear(){
  this.login.Logear(this.usuario, this.password);
}

  ngOnInit() {
  }
  
}
