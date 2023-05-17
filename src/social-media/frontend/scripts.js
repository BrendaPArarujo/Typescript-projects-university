async function consultaPosts(){
    //consome a API e guarda o resultado em posts
    const posts = await fetch("http://localhost:3333/posts")
                    .then(resposta => {
                        return resposta.json()
    })

    let conteudoTabela = ""
    //percorre cada post presente em posts
    posts.forEach(post => {
        //acumula na variavel conteudoTabela os dados de cada post
        conteudoTabela += `<tr> <td>${post.id}</td> <td>${post.title}</td> <td>${post.content}</td> <td>${post.published}</td> </tr>`
    })

    //jogar os dados no html
    document.getElementById("corpoTabela").innerHTML = conteudoTabela
}

//consome API que cadastra um post no banco de dados
async function confirmar(){
    //recuperar os dados do formulario
    const title = document.getElementById("title").value
    const content = document.getElementById("content").value
    const published = document.getElementById("sim").checked

    const corpo = {title,content,published}
    const post = await fetch("http://localhost:3333/post", {
        method: 'POST',
        body: JSON.stringify(corpo),//json transformando em string
        headers: {//headers serve para avisar que você esta enviando um json
            "Content-Type": "application/json;charset=UTF-8"
        }

    })
    .then(resposta => {
        alert("Operação realizada com sucesso")
    })
    .catch(error =>{
        alert("Operação falhou")
    })

    consultaPosts()

}