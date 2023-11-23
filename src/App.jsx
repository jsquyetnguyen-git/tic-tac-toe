import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);


  const handleSelect = (rowIndex, colIndex) => {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      const updateTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      return updateTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player isActive={activePlayer === 'X'} name="Player 1" symbol="X" />
          <Player isActive={activePlayer === 'O'} name="Player 2" symbol="O" />
        </ol>
        <GameBoard turns = {gameTurns} activePlayer={activePlayer} onSelectSquare={handleSelect} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
