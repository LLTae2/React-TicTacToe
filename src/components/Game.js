import React, { useState } from 'react';
import Board from './Board';
import "../App.css";

export default function Game(props) {
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setXIsNext] = useState(true);
	const [history, setHistory] = useState([
		{ squares: Array(9).fill(null) }
	]);

	const jumpTo = step => {
		setStepNumber(step);
		setXIsNext((step%2)===0);
	}
	
	const handleClick = (i) => {
		const current = history[history.length-1];
		const squares = current.squares.slice();
		const winner = calculateWinner(squares);
		if(winner || squares[i]) {
			return;
		}
		squares[i] = xIsNext ? 'X' : 'O';
		setHistory(history.concat({
			squares
		}));
		setXIsNext(!xIsNext);
		setStepNumber(history.length);
	}
	
	const current = history[stepNumber];
	const isDraw = calculateDraw(current.squares);
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

	const onclick = () => {
		setStepNumber(0);
		setXIsNext(true);
		setHistory([
			{ squares: Array(9).fill(null) }
		]);
	}

	let status;
	if(winner) {
		status = 'Winner is ' + winner;
	} else if(isDraw) {
		status = 'Draw';
 	} else {
		status = 'Next Player is ' + (xIsNext?'X':'O');
	}

	return (
		<div>
			<h1 className='game-title'>Tic Tac Toe</h1>
			<div className='game'>
				<div className="game-board">
					<Board onClick={(i)=>handleClick(i)}
					squares={current.squares}/>
				</div>
				<div className='game-info'>
					<h3 className='game-status'>{status}</h3>
					<ul>{moves}</ul>
					<button className='reset' onClick={onclick}>Reset</button>
				</div>
			</div>
		</div>
	);
	
}

function calculateDraw(squares) { //무승부인지 아닌지를 계산하는 함수
	if(!calculateWinner(squares)){
		for(let i=0;i<8;i++){
			if(squares[i])continue;
			else return null;
		}
		return true;
	}
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