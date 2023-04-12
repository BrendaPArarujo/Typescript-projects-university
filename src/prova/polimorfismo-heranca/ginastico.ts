import { Esporte } from "./Esporte";

export class Ginastico extends Esporte{
    private alturaSalto: number

    constructor(nome: string,tipo: string, numeroRegras: number, alturaSalto: number){
        super(nome,tipo,numeroRegras)
        this.setAltura(alturaSalto)

    }

    getAltura():number{
        return this.alturaSalto
    }
    setAltura(alturaSalto:number){
        this.alturaSalto = alturaSalto
    }

    movimento(): string {
        return `Pula`
    }
}