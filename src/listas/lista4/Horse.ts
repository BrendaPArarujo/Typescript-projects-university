import { Animal } from "./Animal"

export class Horse extends Animal{
    private competitor: boolean

    constructor(name:string, competitor:boolean){
        super(name)
        this.setCompetitor(competitor)
    }

    getCompetitor():boolean{
        return this.competitor
    }
    setCompetitor(competitor: boolean){
        this.competitor = competitor
    }

    move(): string {
        return `Galloping...`
    }

    toString(): string {
        return `${super.toString()} Competitor: ${this.getCompetitor() ? `Sim` : `Não`}`
    }

}