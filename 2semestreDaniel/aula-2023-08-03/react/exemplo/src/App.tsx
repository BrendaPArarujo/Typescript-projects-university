import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Produto from './components/produto'


//componente funcional
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello World ReactJS</h1>
    <Produto
      nome="notebook"
      descricao="notebook dell"
      quantidade={10}
      preco={100}>
    </Produto>
    <Produto
      nome="carro"
      descricao="BMW"
      quantidade={10}
      preco={50000}>
    </Produto>
    </>
  )
}

export default App
