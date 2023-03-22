export class Employee{
    private id: number
    private code: number
    private name: string

    constructor(id: number, code: number,name: string){
        this.setId(id)
        this.setCode(code)
        this.setName(name)
    }

    setName(name: string){
        this.name = name
    }

    getName():string{
        return this.name
    }

    setCode(code: number){
        this.code = code
    }

    getCode():number{
        return this.code
    }
    
    setId(id: number){
        this.id = id
    }

    getId():number{
        return this.id
    }

    toString():string{
        return `Name: ${this.getName()} ID: ${this.getId()} Code: ${this.getCode()}`
    }
}