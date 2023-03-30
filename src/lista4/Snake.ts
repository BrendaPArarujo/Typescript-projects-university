import { Animal } from "./Animal"

export class Snake extends Animal{
    private poisonous: boolean
    private smoke: boolean

    constructor(name:string, poisonous: boolean, smoke: boolean){
        super(name)//chama construtor da classe pai
        this.setPoisonous(poisonous)
        this.smoke = smoke
    }

    getPoisonous():boolean{
        return this.poisonous
    }

    setPoisonous(x: boolean){
        this.poisonous = x
    }

    move(): string{
        return `Crawling...`
    }

    fuma():string{
        return `Cool snake, it smokes`
    }

    //anulação de método - eu não te quero mas eu não te largo

    toString(): string {
        return `${super.toString()} Poisonous: ${this.getPoisonous() ? `Sim` : `Não`} Fuma: ${this.smoke ? this.fuma():`Nope`}`
    }
}