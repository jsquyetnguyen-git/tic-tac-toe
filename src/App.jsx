import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";


function deriveActivePLayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {

  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePLayer(gameTurns);

  const handleSelect = (rowIndex, colIndex) => {
    // setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePLayer(prevTurns);
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
