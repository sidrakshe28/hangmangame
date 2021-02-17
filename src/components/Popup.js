import React ,{useEffect} from 'react'
import {checkWin} from '../helpers/helpers';

function Popup( {correctLetters,wrongLetters,selectedWord,setPlayable }) {
    let finalMessage='';
    let finalMessageRevealedWord = '';
    let playable =true;

    if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
        finalMessage = 'Congratulations! You won! 🎉';
        playable = false;
      } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
        finalMessage = 'Sorry! you lost. 😕';
        finalMessageRevealWord = `...the word was: ${selectedWord}`;
        playable=false;
      }


      useEffect(() => {
        setPlayable(playable);
      });


    return (
        <div class="popup-conatiner">
            <div class="popup">
                <h2 id="final-message"></h2>
                <h3 id="final-message-reveal"></h3>
                <button id="play-button">PLAY AGAIN</button>
            </div>
            
        </div>
    )
}

export default Popup
