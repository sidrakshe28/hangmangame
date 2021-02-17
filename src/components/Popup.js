import React from 'react'

function Popup( {correctLetters,wrongLetters,selectedWord,setPlayable }) {
    let finalMessage='';
    let finalMessageRevealedWord='';
    let playable =true;
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
