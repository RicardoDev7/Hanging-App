import './App.css'
import { letters } from './helpers/letters';
import { HangImage } from './components/HangImage';
import type { JSX } from 'react';

function App() : JSX.Element {
  return (
    <div className="App">
      <HangImage imageNumber={9} />
      <h3>_ _ _ _ _ _ _ _ _</h3>
      <h3>Intentos: 0</h3>
      {
        letters.map(x => <button key={x}>{x}</button>)
      }
    </div>
  )
}

export default App
