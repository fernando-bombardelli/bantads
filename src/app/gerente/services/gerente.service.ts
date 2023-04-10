import { Injectable } from '@angular/core';
import { Gerente } from 'src/app/shared/models/gerente.model';

const LS_CHAVE: string = "gerentes"; // precisa desta chave?

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

  constructor() { }

  listaPedidos(){}
  aprovaCliente(){}
  rejeitaCliente(){}
  consultaTodosClientes(){}
  consultaCliente(){}
  consultaTresMelhores(){}
}
