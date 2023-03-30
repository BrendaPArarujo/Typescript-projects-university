import { Funcionario } from "./Funcionario"
export class Gerente extends Funcionario{
    private bonus:number

    constructor(nome:string,endereco: string, cpf: string, salario: number, bonus:number){
        super(nome,endereco,cpf,salario)
        this.setBonus(bonus)
    }

    setBonus(bonus:number){
        this.bonus = bonus
    }
    getBonus(): number {
        return this.bonus
    }

    calculaSalario(): number {
        return super.getSalario() + this.getBonus()
    }

}