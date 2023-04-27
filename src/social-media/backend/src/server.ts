import Fastify from 'fastify'

//import cors from '@fastify/cors'

const app = Fastify()
app.get("/Hello", () => {
    return "Hello world good night"
})
app.get("/teste", () => {
    return "e agora 2"
})

app.get("/posts", async () =>{
    const posts = await prisma.post.findMany()
    return posts
})

app.get("/posts/title", async () =>{
   const posts = await prisma.post.findMany({
        where: {
            title:{
                startsWith: 'Aula'
            }
        }
    })
    return posts
})

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

app.listen({
    port: 3333
})
.then(() => {
    console.log('Http server running')
})