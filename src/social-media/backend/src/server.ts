import Fastify from 'fastify'
const app = Fastify()
app.get("/Hello", () => {
    return "Hello world good night"
})
app.get("/teste", () => {
    return "e agora 2"
})

app.listen({
    port: 3333
})
.then(() => {
    console.log('Http server running')
})