import { useState } from 'react' 
// hook do React controle e alteração de estado
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(100)
  let [nome, setNome] = useState('pessoinha')
  let x = 10
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Aula de React </h1>
      <div className="card">
        <h5>{count}</h5>
        <button onClick={() => setCount((count) => count + 10)}>CLIQUE para adiconar 10</button>
        <h5>{nome}</h5>
        <button onClick={() => {
            let novoNome = prompt('Digite seu nome')
            setNome(novoNome)
            }
          }> CLIQUE para adicionar nome</button>

          <h2>{x}</h2>
          <button onClick={() => {
            x+=1
            console.log(x)
          } 
          }>Clique para alterar x</button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
