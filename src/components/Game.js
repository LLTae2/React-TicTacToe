import React, { useState } from 'react'
import Board from './Board';
import "../App.css";

export default function Game(props) {
  const [xIsNext, setXIsNext] = useState(0);
  const [stepNumber, setStepNumber] = useState(0);
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null) }
  ]);
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step%2)===0);
  }
  const handleClick = (i) => {
    const history = state.history.slice(0, state.stepNumber+1);
    const current = history[history.length-1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if(winner || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? 'X' : 'O';
    setHistory(history.concat(
      squares(squares)
    ));
    setXIsNext(!state.xIsNext);
    setStepNumber(history.length);
  }
  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares);
  const moves = history.map((step, move) => {
    const desc = move ? 'Go to #' + move : 'Start the Game';
    return (
      <li key={move}>
        <button onClick={() => {jumpTo(move)}}>
          {desc}
        </button>
      </li>
    )
  });

  let status;
  if(winner){
    status = 'Winner is ' + winner;
  } else {
    status = 'Next Player is ' + (state.xIsNext?'X':'O');
  }

  return (
    <div className='game'>
        <div className="game-board">
            <Board onClick={(i)=>handleClick(i)}
            squares={current.squares}/>
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ul>{moves}</ul>
        </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for(let i=0;i<lines.length;i++){
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
      return squares[a];
    }
  }
  return null;
}