import React, { useState } from "react";
import Board from "./Board";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null)); // Board state
  const [isXNext, setIsXNext] = useState(true); // Track turns

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return; // Ignore if square filled or game over

    const nextSquares = squares.slice();
    nextSquares[index] = isXNext ? "X" : "O";
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? "X" : "O"}`;

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tic-Tac-Toe</h1>
      <div>{status}</div>
      <Board squares={squares} onClick={handleClick} />
      <button onClick={resetGame} style={{ marginTop: "20px" }}>
        Reset Game
      </button>
    </div>
  );
};

// Function to determine the winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default App;
