import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente.model';

const LS_CHAVE: string = "clientes"; // precisa desta chave?

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  cadastrarNovoCliente(){}
  logIn(){}
  logOut(){}
  alterarPerfil(){}
  depositar(){}
  sacar(){}
  transferir(){}
  consultar(){}
}
