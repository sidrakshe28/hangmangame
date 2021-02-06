import React from 'react';
import Header from './components/Header';
import Figure from './components/Figure';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="game-container">
        <Figure/>
      </div>
    </div>
  );
}

export default App;
