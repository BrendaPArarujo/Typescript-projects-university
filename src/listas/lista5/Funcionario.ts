export class Funcionario{
    protected nome: string
    protected endereco: string
    protected cpf: string
    protected salario: number

    constructor(nome:string, endereco: string, cpf: string, salario: number){
        this.setNome(nome)
        this.setCpf(cpf)
        this.setSalario(salario)
    }

    getNome():string{
        return this.nome
    }
    setNome(nome:string){
        this.nome = nome
    }
    setCpf(cpf:string){
        this.cpf = cpf
    }
    getCpf():string{
        return this.cpf
    }
    setSalario(salario: number){
        this.salario = salario
    }
    getSalario():number{
        return this.salario
    }
    setEndereco(endereco:string){
        this.endereco = endereco
    }
    getEndereco():string{
        return this.endereco
    }

    calculaSalario():number{
        return this.salario
    }

}