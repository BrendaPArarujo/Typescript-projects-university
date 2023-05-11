import Fastify from 'fastify'
//import cors from '@fastify/cors'
import { AppRoutes } from './routes'

//importa dependencia cors
import cors from '@fastify/cors'


const server = Fastify()
//registra cors no server
server.register(cors)

server.register(AppRoutes)
server.listen({
    port: 3333
})
.then(() => {
    console.log('Http server running')
})


//request.params
//recupera dado presente na url

//request.body
//recupera dado presente no body -> corpo da requisicao

