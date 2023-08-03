//vamos definir as props de um componente Produto (props = propriedade)

interface ProdutoProps{
    nome: string,
    descricao: string,
    quantidade: number,
    preco: number
}

function Produto(prod: ProdutoProps){

return (
    <div>
        Nome: {prod.nome}
        Descrição: {prod.descricao}
        Quantidade: {prod.quantidade}
        Preço: {prod.preco}
    </div>
)

}

export default Produto