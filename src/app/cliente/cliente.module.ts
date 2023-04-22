import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './services';

import { ClienteTelaInicialComponent } from './components/cliente-tela-inicial/cliente-tela-inicial.component';
import { ClienteAutocadastroComponent } from './components/cliente-autocadastro/cliente-autocadastro.component';


@NgModule({
  declarations: [    
    ClienteTelaInicialComponent, ClienteAutocadastroComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
