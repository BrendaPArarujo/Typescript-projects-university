class ProdutoEncap{
    public id: number
    public descricao: string
    private qtde: number
    private preco: number

    constructor( id: number,descricao: string, qtde: number, preco: number){
        this.id = id
        this.descricao = descricao
        this.setQtde(qtde)
        this.setPreco(preco)

    }

    setQtde(qtde: number): void{
        if(qtde > 0){
            this.qtde = qtde
        }else{
            console.log("Quantidade informada é inválida")
        }
    }

    setPreco(preco: number):void{
        if(preco >= 0){
            this.preco = preco
        }else{
            console.log("Valor informado é inválido")
        }
    }

    getQtde(): number{
        return this.qtde
    }

    getPreco(): number{
        return this.preco
    }

    comprar(x:number):void{
        this.qtde += x
    }

    vender(x:number):void{
        this.setQtde(this.qtde - x)
    }

    subir(x:number):number{
        this.setPreco(this.preco + x)
        return this.preco
    }

    descer(x:number):number{
        this.preco -= x
        return this.preco
    }
    mostra():string{
        let resp = "ID: " + this.id + "\nDescrição: " + this.descricao + "\nQuantidade: " + 
        this.qtde + "\nPreço: " + this.preco

        return resp

    }

}
let obj1ProdEncap = new ProdutoEncap(1, 'X Bacon Salada', 5, 28)
let obj2ProdEncap = new ProdutoEncap(2, 'Lazanha a Bolonheza', 10, 22)
obj1ProdEncap.comprar(3)
obj1ProdEncap.vender(10)
obj1ProdEncap.descer(48)
console.log(obj1ProdEncap.mostra())
obj2ProdEncap.vender(4)
obj1ProdEncap.subir(3)
obj2ProdEncap.descer(3)
console.log(obj1ProdEncap.mostra())
console.log(obj2ProdEncap.mostra())

obj1ProdEncap.setQtde(-40)
obj2ProdEncap.setPreco(-90)
obj1ProdEncap.setQtde(40)
obj2ProdEncap.setPreco(90)

let obj3ProdEncap = new ProdutoEncap(3, "Celular", 30, 1700)

console.log(`Qtde: ${obj3ProdEncap.getQtde()} e Preço: ${obj3ProdEncap.getPreco()}
}`)
