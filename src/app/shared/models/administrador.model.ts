import { Cliente } from "./cliente.model";
import { Gerente } from "./gerente.model";

export class Administrador {

    constructor(
        public conta?: string, //criar clase Conta? modulo para Conta?
        // public conta: Conta,
        public cliente?: Cliente,
        public gerente?: Gerente,
        // public movimentacao: Conta.movimentacao(),
        ){}
}
