import React ,{ useState }from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';

import './App.css';

const words = ['application','programming','interface','wizard'];

let selectedWord= words[Math.floor(Math.random() * words.length)];

let playable=true;

const correctLetters=[];
const WrongLetters =[];

function App() {
  const [playable , setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters]= useState( []);
  const [rongLetters, setWrongLetters]= useState( []);

  return (
    <div>
      <Header/>
      <div className="game-container">
        <Figure/>
        <WrongLetters/>
        <Word selectedWord={selectedWord} correctLetters ={correctLetters}/>
      </div>

    </div>
  );
}

export default App;
