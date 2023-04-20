import { Funcionario } from "./Funcionario"
export class Assistente extends Funcionario{
    private horaExtra: number

    constructor(nome:string,endereco: string, cpf: string, salario: number,horaExtra:number){
        super(nome,endereco,cpf,salario)
        this.setHora(horaExtra)

    }
    getHora():number{
        return this.horaExtra
    }
    setHora(hora:number){
        this.horaExtra = hora
    }

    calculaSalario(){
        return super.getSalario() + (this.getHora()/3)
    }
}