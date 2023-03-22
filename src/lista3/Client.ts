export class Client{
    private id: number
    private name: string
    private cpf: string

    constructor(id: number, name: string, cpf: string){
        this.setId(id)
        this.setName(name)
        this.setCpf(cpf)
    }

    getId():number{
        return this.id
    }

    setId(id: number){
        this.id = id
    }

    getName():string{
        return this.name
    }

    setName(name:string){
        this.name = name
    }

    getCpf():string{
        return this.cpf
    }

    setCpf(cpf: string){
        this.cpf = cpf
    }

    toString():string{
        return `Name: ${this.getName()} ID: ${this.getId()} CPF: ${this.getCpf()}`
    }
}

