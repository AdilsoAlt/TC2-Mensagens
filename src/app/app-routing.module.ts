import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NovaMensagemComponent } from './nova-mensagem/nova-mensagem.component';
import { NovoCadastroComponent } from './novo-cadastro/novo-cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'novo-cadastro', component: NovoCadastroComponent },
  { path: 'nova-mensagem', component: NovaMensagemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
