export class Esporte{
    private nome: string
    private tipo: string
    private numeroRegras: number

    constructor(nome: string,tipo: string, numeroRegras: number){
        this.setNome(nome)
        this.setTipo(tipo)
        this.setNroRegras(numeroRegras)
    }

    getNome():string{
        return this.nome
    }
    setNome(nome:string){
        this.nome = nome
    }
    getTipo():string{
        return this.tipo
    }
    setTipo(tipo:string){
        this.tipo = tipo
    }
    getNroRegras():number{
        return this.numeroRegras
    }
    setNroRegras(numeroRegras:number){
        this.numeroRegras = numeroRegras
    }

    toString(){
        return `Nome: ${this.getNome()} Tipo: ${this.getTipo()} Numero de regras: ${this.getNroRegras()}`
    }

    movimento():string{
        return `Corre`    
    }

}