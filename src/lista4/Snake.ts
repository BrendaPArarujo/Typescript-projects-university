import { Animal } from "./Animal"

export class Snake extends Animal{
    private poisonous: boolean

    constructor(name:string, poisonous: boolean){
        super(name)//chama construtor da classe pai
        this.poisonous = poisonous
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

    //anulação de método - eu não te quero mas eu não te largo

    toString(): string {
        return `${super.toString()} Poisonous: ${this.getPoisonous() ? `Sim` : `Não`}`
    }
}