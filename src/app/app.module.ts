import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovoCadastroComponent } from './novo-cadastro/novo-cadastro.component';
import { LoginComponent } from './login/login.component';
import { NovaMensagemComponent } from './nova-mensagem/nova-mensagem.component';
import { ListarMensagensComponent } from './listar-mensagens/listar-mensagens.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Interceptor } from 'Interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NovoCadastroComponent,
    LoginComponent,
    NovaMensagemComponent,
    ListarMensagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
