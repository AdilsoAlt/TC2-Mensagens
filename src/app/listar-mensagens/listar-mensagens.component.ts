import { Component, OnInit } from '@angular/core';
import { Mensagens } from '../Mensagens';
import { WebService } from '../web.service';

@Component({
  selector: 'app-listar-mensagens',
  templateUrl: './listar-mensagens.component.html',
  styleUrls: ['./listar-mensagens.component.css']
})
export class ListarMensagensComponent implements OnInit {

  constructor(private web: WebService) { }

  listaMensagens: Mensagens[];
  mensagem = { id: 0, text: "", date: "" }

  carregarMensagens(): void {
    this.web.todasMensagens().subscribe(res => {     
      this.listaMensagens = res;
      console.log(this.listaMensagens);
    });
  }

  ngOnInit(): void {
    this.carregarMensagens();
  }

}
