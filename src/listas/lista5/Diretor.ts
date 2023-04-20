import { Funcionario } from "./Funcionario"
export class Diretor extends Funcionario{
    private acoesEmpresa:number

    constructor(nome:string,endereco: string, cpf: string, salario: number, bonus:number){
        super(nome,endereco,cpf,salario)
        this.setBonus(bonus)
    }

    setBonus(acoesEmpresa:number){
        this.acoesEmpresa = acoesEmpresa
    }
    getBonus(): number {
        return this.acoesEmpresa
    }

    calculaSalario(): number {
        return this.acoesEmpresa*super.getSalario()
    }

    
}