export class CellPhone{
    private id: number
    private nro: number
    private operadora: string

    constructor(id: number, nro: number, operadora: string){
        this.id = id
        this.nro = nro
        this.operadora = operadora
    }

    getId(): number{
        return this.id
    }

    setId(id: number){
        this.id = id
    }

    getNro():number{
        return this.nro
    }
    setNro(nro:number){
        this.nro = nro
    }
    getOperadora():string{
        return this.operadora
    }
    setOperadora(operadora: string){
        this.operadora = operadora
    }

    toString():string{
        return `ID: ${this.getId()} Número: ${this.getNro()} Operadora: ${this.operadora}`
    }
}
