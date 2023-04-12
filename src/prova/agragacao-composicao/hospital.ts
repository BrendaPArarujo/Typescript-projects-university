import { Medicos } from "./medicos"
export class Hospital{
    private endereco: string
    private nome: string
    private cnpj: string
    private medicos: Medicos[]

    constructor(endereco: string, nome: string, cnpj: string, medico:Medicos){
        this.setCnpj(cnpj)
        this.setEndereco(endereco)
        this.setNome(nome)
        this.medicos = []
        this.addMedicos(medico)
    }
    getNome():string{
        return this.nome
    }
    setNome(nome:string){
        this.nome = nome
    }
    getEndereco():string{
        return this.endereco
    }
    setEndereco(endereco:string){
        this.endereco = endereco
    }
    getCnpj():string{
        return this.cnpj
    }
    setCnpj(cnpj:string){
        this.cnpj = cnpj
    }

    addMedicos(medico: Medicos){
        this.medicos.push(medico)
    }

    toString(){
        return `Nome: ${this.getNome()} Endereco: ${this.getEndereco()} Cnpj: ${this.getCnpj()} Medicos: ${this.medicos}`
    }

}