import Fastify from 'fastify'

//import cors from '@fastify/cors'
//Importando a dependencia zod
import { z } from "zod";

const server = Fastify()
server.get("/Hello", () => {
    return "Hello world good night"
})
server.get("/teste", () => {
    return "e agora 2"
})

server.get("/posts", async () =>{
    const posts = await prisma.post.findMany()
    return posts
})

server.get("/posts/title/:title", async (request) =>{
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
    //converte o texto enviado pelo frontend para as variaveis title, content e published

    const {title, content, published} = postBody.parse(request.body)

    const newPost = await prisma.post.create({
        data: {
            title: title,
            content: content,
            published: published
        }
    })
    return newPost

})
//put quando preciso atualizar todos os campos do banco de dados
//patch quando vou atualizar 1 campo do banco de dados
server.patch("/post/content",async (request) => {
   const contentBody = z.object({
    id: z.number(),
    content: z.string()
   }) 

const {id, content} = contentBody.parse(request.body)

const postUpdated = await prisma.post.update({
    where: {
        id: id
    },
    data: {
        content: content
    }
})
return postUpdated
})
//rota para remover um post do banco de dados

server.delete("/post/:id", async (request) => {
  //const dados: any = request.params
  //const id = parseInt(dados.id)
    //criar objeto zod para esquema de dados

    const idParam = z.object({
        id: z.number()
    })
//recupera o id do frontend 
    const {id} = idParam.parse(request.params)
    //remove do banco
    const idNumber = Number(id)
    const postDelete = await prisma.post.delete({
        where:{
            id: id
        }
    })

return postDelete

})



import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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