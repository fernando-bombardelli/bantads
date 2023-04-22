import { Component } from '@angular/core';
import { PrincipalTelaInicialComponent } from './principal/components/principal-tela-inicial/principal-tela-inicial.component';
import { ClienteTelaInicialComponent } from './cliente/components/cliente-tela-inicial/cliente-tela-inicial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banco TADS';
}
