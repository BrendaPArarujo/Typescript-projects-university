class ClienteEncap{
    private nroConta: string
    private nroAgencia: string
    private nome: string
    private saldo: number


    constructor( nroConta:string, nroAgencia:string, nome:string, saldo:number) {
    this.setNroConta(nroConta)

    } 

    setNroConta(nroConta:string){
        if((nroConta.length == 8) && (nroConta.charAt(6) == '-')){
            this.nroConta = nroConta
        }else{
            console.log("Número da conta inválido")
        }
        
    }

    setNroAgencia(nroAgencia:string){
        if((nroAgencia.length == 6) && (nroAgencia.charAt(4) == '-')){
            this.nroAgencia = nroAgencia
        }else{
            console.log("Número da angência inválido")
        }
    }

    setNome(nome: string){
        if(nome.length <= 30){
            this.nome = nome
        }else{
            console.log("Nome inválido")
        }
    }

    setSaldo(saldo:number){
        saldo >= 0 ? this.saldo = saldo : console.log("Saldo não pode ser negativo")
    }

    getNroConta():string{
        return this.nroConta
    }
    getNroAgencia():string{
        return this.nroAgencia
    }
    getNome():string{
        return this.nome
    }
    getSaldo():number{
        return this.saldo
    }

    sacar(x: number):void{
        this.setSaldo(this.saldo - x)
    }

    depositar(x:number):void{
        this.setSaldo(this.saldo + x)
    }

}

let fulano = new ClienteEncap("123456-8", "1234-5", "Fulano", 200)
fulano.depositar(100)
fulano.sacar(50)
console.log(`O saldo da conta ${fulano.getSaldo()}`)



    
