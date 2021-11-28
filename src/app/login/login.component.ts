import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dadosLogin = { login: "", senha: "" }

  constructor(private web: WebService, private routes: Router) { }

  entrar() {
    this.web.realizarLogin(this.dadosLogin).subscribe(res => {
      if (res.ok == true) {
        alert(res.body.msg);
        sessionStorage.setItem('token', res.body.token);
        sessionStorage.setItem('expires', res.body.expiry);
        sessionStorage.setItem('userName', res.body.userName);
        this.routes.navigate(['nova-mensagem']);
      } else {
        alert("Erro de Login");
      }
    });
  }

  ngOnInit(): void {
  }

}
