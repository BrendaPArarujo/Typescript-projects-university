import { Esporte } from "./Esporte";
import { Ginastico } from "./ginastico";
import { Natacao} from "./natacao";

let Ginastico1 = new Ginastico(`ginastica olimpica`, `Em terra`, 10, 6)
let Natacao1 = new Natacao(`Natacao Artistica`, `aquatico`, 5, 24)

function escolheEsporte(esporte:Esporte){
    console.log(esporte.getNome())
    console.log(esporte.getTipo())
    console.log(esporte.movimento())
}

escolheEsporte(Ginastico1)
escolheEsporte(Natacao1)

let esporte = new Esporte(`fefw`, `fds`, 10)
esporte = Ginastico1
console.log(esporte.toString())