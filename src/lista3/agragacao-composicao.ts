//classe parte Product
class Product{
    private name: string
    private price: number

    constructor(name: string, price: number){
        this.name = name
        this.price = price
    }

    getName():string{
        return this.name
    }
    setName(nome: string){
        this.name = nome
    }
    getPrice():number{
        return this.price
    }
    setPrice(preco: number){
        this.price = preco
    }
    toString():string{
        return(`Nome: ${this.getName()} Price: ${this.getPrice}`)
    }

}

const prod1 = new Product("Alexa", 400)
const prod2 = new Product("Bola de basquete", 200)

//classe todo para a associação com product
class CarItem{
    private product: Product //agregação
    private quantity: number

    constructor(product: Product, quantity:number){
        this.product = product
        this.quantity = quantity

    }

    getProduct(): Product{
        return this.product
    }
    setProduct(produto: Product){
        this.product = produto
    }
    getQuantity(): number{
        return this.quantity
    }
    setQuantity(quantidade: number){
        this.quantity = quantidade
    }

    calculateTotalPrice():number{
        return this.quantity * this.product.getPrice()
    }
    toString(){
        return `Product: ${this.product.toString()} Quantity: ${this.quantity} Total Price: ${this.calculateTotalPrice()}`
    }

}
const caritem1 = new CarItem(prod1,2)
console.log(caritem1.toString())
const caritem2 = new CarItem(prod2,5)
console.log(caritem2.toString())

class ShoppingCart{
    private id: number
    private carItems: CarItem[]
}
