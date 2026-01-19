import './App.css'
import { letters } from './helpers/letters';

function App() {
  return (
    <div className="App">
      <h3>Imagen del juego</h3>
      <h3>_ _ _ _ _ _ _ _ _</h3>
      <h3>Intentos: 0</h3>
      {
        letters.map(x => <button key={x}>{x}</button>)
      }
    </div>
  )
}

export default App
