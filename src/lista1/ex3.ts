class Produto{
    id: number
    descricao: string
    qtde: number
    preco: number

    constructor( id: number,descricao: string, qtde: number, preco: number){
        this.id = id
        this.descricao = descricao
        this.qtde = qtde
        this.preco = preco

    }

    comprar(x:number):void{
        this.qtde += x
    }

    vender(x:number):void{
        this.qtde -= x
    }

    subir(x:number):number{
        this.preco += x
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