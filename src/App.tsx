import React from 'react';
import Header from './header';
import GameBoard from './game-board'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <GameBoard />
    </div>
  );
}

export default App;
