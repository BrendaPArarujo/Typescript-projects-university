import Fastify from 'fastify'

//import cors from '@fastify/cors'
//Importando a dependencia zod
import { z } from "zod";

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

app.get("/posts/title/:title", async (request) =>{
    //define um objeto zod contendo o esquema de dados
    const titleParam = z.object({
        title: z.string()
    })

    //recupera o dado do front a partir do zod
    //converte o texto enviado pelo frontend
    const {title} = titleParam.parse(request.params)

   const posts = await prisma.post.findMany({
        where: {
            title:{
                startsWith: title
            }
        }
    })
    return posts
})

//rota para criacao de um post -> verbo post
server.post("/post", async (request) => {

    const postBody = z.object({
        title: z.string(),
        content: z.string(),
        published: z.boolean()
    })

    //recupera o dado do front a partir do zod postBody
    //converte o texto enviado pelo frontend apra as variaveis title, content e published

    const {title, body, published} = postBody.parse(request.body)

    await prisma.post.create({
        data: {
            title: title,
            content: content,
            published: published
        }
    })

})




import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

app.listen({
    port: 3333
})
.then(() => {
    console.log('Http server running')
})


//request.params
//recupera dado presente na url

//request.body
//recupera dado presente no body -> corpo da requisicao