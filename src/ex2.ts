class Cliente{
    numeroConta: number;
    numeroAgencia: number;
    nome: string;
    saldo: number;

    constructor(numeroConta: number, numeroAgencia: number, nome: string, saldo: number){
        this.numeroConta = numeroConta;
        this.numeroAgencia = numeroAgencia;
        this.nome = nome;
        this.saldo = saldo;
    }

    realizarDeposito(valor: number):void{
        this.saldo += valor;
    }

    realizarSaque(valor: number):void{
        this.saldo -= valor;
    }

    retornaDados(): void{
        console.log("Nome: " + this.nome + "\nNúmero da conta: " + this.numeroConta + "\nSaldo: " + this.saldo)
    }

}


let Fulano = new Cliente(123,456,"brenda", 10)
console.log(Fulano)
Fulano.realizarDeposito(5)
Fulano.retornaDados()
Fulano.realizarSaque(2)
Fulano.retornaDados()

let Beltrano = new Cliente(234,123,"julinho", 400)
Fulano.realizarDeposito(500)
Fulano.retornaDados()
Fulano.realizarSaque(80)
Fulano.retornaDados()
