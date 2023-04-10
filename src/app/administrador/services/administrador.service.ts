import { Injectable } from '@angular/core';
import { Administrador } from 'src/app/shared/models/administrador.model';

const LS_CHAVE: string = "clientes"; // precisa desta chave?

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor() { }

 // listaGerentes(){}
  emiteRelatorioClientes(){}
  insereGerente(){}
  removeGerente(){}
  listaGerentes(){}
  alteraGerente(){}
}
