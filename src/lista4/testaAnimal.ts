import { Horse } from "./Horse";
import { Snake } from "./Snake";

let objetoSnake = new Snake(`Cobrinha do bem`, false)
let objHorse = new Horse(`Cavalo nadador`, true)


console.log(objetoSnake.move())
console.log(objetoSnake.toString())
console.log(objHorse.move())
console.log(objHorse.toString())

//Fazer o código do diagrama do funcionario, diretor, gerente e assistente