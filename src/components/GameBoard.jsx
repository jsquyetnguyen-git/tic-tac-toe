const initGame = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

function GameBorad({ onSelectSquare, turns }) {
  let gameBoard = initGame;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square

    gameBoard[row][col] = player;
  }

  // const [gameBoard, setGameBoard] = useState(initGame);

  //  const handleClick = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameBorad) => {
  //       const updateGameBoard = [... prevGameBorad.map(innderArray => [...innderArray]) ];
  //       updateGameBoard[rowIndex][colIndex] = activePlayer;
  //       return updateGameBoard;
  //   });
  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <button
                disabled={playerSymbol !== null}
                onClick={() => onSelectSquare(rowIndex, colIndex)}
                key={colIndex}>{playerSymbol}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBorad;
