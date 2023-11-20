import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelect = (e) => {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X'?'O':'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className = "highlight-player">
          <Player isActive={activePlayer === 'X'} name="Player 1" symbol="X" />
          <Player isActive={activePlayer === 'O'} name="Player 2" symbol="O" />
        </ol>
        <GameBoard activePlayer={activePlayer} onSelectSquare={handleSelect} />
      </div>
    </main>
  );
}

export default App;
