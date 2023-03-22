export class Service{
    private id: number
    private name: string
    private price: number

    constructor(id: number, name: string, price: number){
        this.setId(id)
        this.setName(name)
        this.setPrice(price)
    }

    setId(id: number){
        this.id = id
    }

    getId():number{
        return this.id
    }

    setName(name: string){
        this.name = name
    }

    getName():string{
        return this.name
    }

    setPrice(price: number){
        this.price = price
    }

    getPrice():number{
        return this.price
    }


    toString():string{
        return `Name: ${this.getName()} ID: ${this.getId()} Price: ${this.getPrice()}`
    }
}
