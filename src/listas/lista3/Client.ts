import { forEachChild } from "typescript"
import { CellPhone } from "./CellPhone"

export class Client{
    private id: number
    private name: string
    private cpf: string
    private cellphone: CellPhone[]

    constructor(id: number, name: string, cpf: string, cellphone: CellPhone){
        this.setId(id)
        this.setName(name)
        this.setCpf(cpf)
        this.cellphone = []
        this.setCellphone(cellphone)
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

    setCellphone(cellPhone: CellPhone){
        this.cellphone.push(cellPhone)
    }
    getCellphones(){
        return this.cellphone
    }

    toString():string{
        return `Name: ${this.getName()} ID: ${this.getId()} CPF: ${this.getCpf()} Cellphones: ${this.cellphone}`
    }
}

