import { Animal } from "./Animal";
import { Horse } from "./Horse";
import { Snake } from "./Snake";

let objetoSnake = new Snake(`Cobrinha do bem`, false, true)
let objHorse = new Horse(`Cavalo nadador`, true)

function exemploPolimorfismo(obj: Animal){//sempre passar o pai como parâmetro da função
    console.log(obj.move())
    console.log(obj.toString())
}

exemploPolimorfismo(objetoSnake)
exemploPolimorfismo(objHorse)
//console.log(objetoSnake.move())
//console.log(objetoSnake.toString())
//console.log(objHorse.move())
//console.log(objHorse.toString())

//Fazer o código do diagrama do funcionario, diretor, gerente e assistente