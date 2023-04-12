import { Esporte } from "./Esporte"
export class Natacao extends Esporte{
    private temperaturaAgua: number

    constructor(nome: string,tipo: string, numeroRegras: number, temperaturaAgua: number){
        super(nome,tipo,numeroRegras)
        this.setTemp(temperaturaAgua)

    }

    getTemp():number{
        return this.temperaturaAgua
    }
    setTemp(temperaturaAgua:number){
        this.temperaturaAgua = temperaturaAgua
    }

    movimento(): string {
        return `Nada`
    }
}