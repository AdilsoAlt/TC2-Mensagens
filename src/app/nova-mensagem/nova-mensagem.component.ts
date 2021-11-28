import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-nova-mensagem',
  templateUrl: './nova-mensagem.component.html',
  styleUrls: ['./nova-mensagem.component.css']
})
export class NovaMensagemComponent implements OnInit {

  nomeUsuario = sessionStorage.getItem('userName');
  token = sessionStorage.getItem('token');
  dadosEnvio = { texto: '', token: '' }
  
  constructor(private routes: Router, private web: WebService) { }

  sair() {
    sessionStorage.clear();
    alert('Logout realizado com sucesso!');
    this.routes.navigate(['']);
  }

  novaMensagem() {
    this.web.cadastrarNovaMensagem(this.dadosEnvio).subscribe(res => {
      if (res.ok == true) {
        alert(res.body.msg);
        location.reload()
      } else {
        alert("Erro de Login");
      }
    });
  }

  ngOnInit(): void {
  }

}
