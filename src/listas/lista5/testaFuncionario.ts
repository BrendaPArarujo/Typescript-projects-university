import { Assistente } from "./Assistente";
import { Diretor } from "./Diretor";
import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";

let objAssistente = new Assistente("Juju", "Rua 10", "34252", 1200, 3)
let objGerente = new Gerente("cleitin", "Rua base", "36363", 5000, 200)
let objDiretor = new Diretor("Jesica", "Rua 35053", "3849023", 10000, 500)

function chamaFuncionario(funcionario: Funcionario){
    console.log(funcionario.getNome())
    console.log(funcionario.calculaSalario())
}

chamaFuncionario(objDiretor)
chamaFuncionario(objAssistente)
chamaFuncionario(objGerente)