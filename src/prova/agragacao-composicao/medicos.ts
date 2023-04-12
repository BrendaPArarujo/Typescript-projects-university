
export class Medicos{
    private nome: string
    private cpf: string
    private crm: number

    constructor(nome: string, cpf:string, crm: number){
        this.setNome(nome)
        this.setCpf(cpf)
        this.setCrm(crm)
    }

    getNome():string{
        return this.nome
    }
    setNome(nome:string){
        this.nome = nome
    }
    getCrm():number{
        return this.crm
    }
    setCrm(crm:number){
        this.crm = crm
    }
    getCpf():string{
        return this.cpf
    }
    setCpf(cpf:string){
        this.cpf = cpf
    }

    toString():string{
        return `Nome: ${this.getNome()} Cpf: ${this.getCpf()} CRM: ${this.getCrm()}`
    }


}