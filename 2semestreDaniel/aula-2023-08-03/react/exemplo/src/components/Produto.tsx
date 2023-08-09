//vamos definir as props de um componente Produto (props = propriedade)

interface ProdutoProps{
    nome: string,
    descricao: string,
    quantidade: number,
    preco: number
}

function Produto(prod: ProdutoProps){

return (
    <>
    <div className="bg-zinc-900 w-full h-10 rounded m-2 flex items-center justify-center text-white" >
        Nome: {prod.nome}
        Descrição: {prod.descricao}
        Quantidade: {prod.quantidade}
        Preço: {prod.preco}
    </div>
</>
)

}



export default Produto