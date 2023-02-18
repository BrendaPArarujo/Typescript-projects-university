class Rio{
    nome: string
    nivel: number
    poluido: boolean


    constructor(nome: string, nivel: number, poluido: boolean){
        this.nome = nome
        this.nivel = nivel
        this.poluido = poluido
    }

    chover(x:number):number{
        this.nivel += x
        return this.nivel
    }

    ensolarar(x:number):number{
        this.nivel -= x
        return this.nivel
    }

    limpar(): boolean{
        this.poluido = false
        return this.poluido
    }

    sujar():boolean{
        this.poluido = true
        return this.poluido
    }

    mostra():string{
        let resp = "Nome: " + this.nome + "\nNível: " + this.nivel + "\nPoluído: " + this.poluido
        return resp
    }

}

class TestaRio{
    main(){
        let rio1 = new Rio("Rio A", 10, true)
        console.log(rio1.chover(5))
        console.log(rio1.ensolarar(2))
        console.log(rio1.sujar())
        console.log(rio1.mostra())

        let rio2 = new Rio("Rio B", 20, false)
        console.log(rio2.chover(2))
        console.log(rio2.ensolarar(10))
        console.log(rio2.limpar())
        console.log(rio2.mostra())
        
    }


}

let teste = new TestaRio()
teste.main()