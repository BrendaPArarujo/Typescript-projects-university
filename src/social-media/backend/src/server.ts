import Fastify from 'fastify'
//import cors from '@fastify/cors'
import { AppRoutes } from './routes'
const server = Fastify()
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

