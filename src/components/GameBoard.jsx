import { useState } from "react";

const initGame = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

function GameBorad({onSelectSquare, activePlayer}) {
  const [gameBoard, setGameBoard] = useState(initGame);

   const handleClick = (rowIndex, colIndex) => {
    setGameBoard((prevGameBorad) => {
        const updateGameBoard = [... prevGameBorad.map(innderArray => [...innderArray]) ];
        updateGameBoard[rowIndex][colIndex] = activePlayer;
        return updateGameBoard;
    });
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <button onClick = {() => handleClick(rowIndex, colIndex)} key={colIndex}>{playerSymbol}</button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBorad;
