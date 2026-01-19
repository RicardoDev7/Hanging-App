import './App.css'
import { letters } from './helpers/letters';
import { HangImage } from './components/HangImage';
import { useEffect, useState, type JSX } from 'react';
import { getRandonWord } from './helpers/getRandonWord';

function App() : JSX.Element {

  const [word, setWord] = useState(getRandonWord());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const hiddenWordArray = hiddenWord.split(' ');
  const [ attempts, setAttempts ] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if(attempts == 9) setLose(true);
  }, [attempts]);

  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if(currentHiddenWord == word) setWon(true);
  }, [hiddenWord]);

  const checkLetter = (letter: string) => {
    if(lose || won) return;
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

  const newGame = () => {
    const newWord = getRandonWord();
    setWord(newWord);
    setHiddenWord('_ '.repeat(newWord.length));
    setAttempts(0);
    setLose(false);
    setWon(false);
  }

  return (
    <div className="App">
      <HangImage imageNumber={attempts} />
      <h3>{hiddenWord}</h3>
      <h3>Intentos: {attempts}</h3>
      {
        (lose) 
        ? <h2>Usuario Perdió. La palabra era: {word.toUpperCase()}</h2> 
        : ''
      }
      {
        (won) 
        ? <h2>Felicidades!! Ganaste</h2> 
        : ''
      }
      {
        letters.map(x => 
          <button 
            onClick={() => checkLetter(x)} 
            key={x}>{x}
          </button>)
      }
      <br />
      <button onClick={newGame}>¿New Game?</button>
    </div>
  )
}

export default App
