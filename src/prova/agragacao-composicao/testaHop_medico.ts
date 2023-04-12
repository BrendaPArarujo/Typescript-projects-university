//Testando as classes medicos e hospital, sendo que a classe hospital e o todo e a classe Medicos e a parte


import { Medicos } from "./medicos";
import { Hospital} from "./hospital";


    let medico1 = new Medicos(`brenda`, `345353`, 23243)
    let medico2 = new Medicos(`julio`, `434224`, 3443)
    let hospital1 = new Hospital(`rua 1`, `sao joaquinos`, `232434000121`, medico1)
    hospital1.addMedicos(medico2)
    console.log(medico1.toString())
    console.log(medico2.toString())
    console.log(hospital1.toString())




