import './App.css'
import { letters } from './helpers/letters';
import { HangImage } from './components/HangImage';
import { useState, type JSX } from 'react';

function App() : JSX.Element {

  const [word] = useState('LAPTOP');
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const hiddenWordArray = hiddenWord.split(' ');
  const [ attempts, setAttempts ] = useState(0);

  const checkLetter = (letter: string) => {
    if(!word.includes(letter)){
      setAttempts(Math.min(attempts + 1, 9));
      return;
    }
    for(let i = 0; i < word.length; i++){
      if(word[i].toLowerCase() == letter.toLowerCase()){
        hiddenWordArray[i] = word[i];
      } 
    }
    setHiddenWord(hiddenWordArray.join(' '));
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
