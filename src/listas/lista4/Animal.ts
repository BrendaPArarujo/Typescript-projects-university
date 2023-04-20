export class Animal{
    protected name: string
    constructor(name:string){
        this.setName(name)
    }

    getName():string{
        return this.name
    }

    setName(name:string){
        this.name = name
    }

    toString():string{
        return `Name: ${this.name}`
    }

    move(): string{
        return `Moving...`
    }

}