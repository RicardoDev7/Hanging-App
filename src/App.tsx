import './App.css'
import { letters } from './helpers/letters';
import { HangImage } from './components/HangImage';
import { useState, type JSX } from 'react';

function App() : JSX.Element {

  const [word] = useState('LAPTOP');
  const [hiddenWord] = useState('_ '.repeat(word.length));

  const [ attempts, setAttempts ] = useState(0);

  const checkLetter = (letter: string) => {
    setAttempts(Math.min(attempts + 1, 9));
  }

  return (
    <div className="App">
      <HangImage imageNumber={attempts} />
      <h3>{hiddenWord}</h3>
      <h3>Intentos: {attempts}</h3>
      {
        letters.map(x => 
          <button 
            onClick={() => checkLetter(x)} 
            key={x}>{x}
          </button>)
      }
    </div>
  )
}

export default App
