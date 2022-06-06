import React, { Component } from 'react'
import Board from './Board';
import "../App.css";

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            xIsNext: 0,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ]
        }
        
    }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    return (
      <div className='game'>
          <div className="game-board">
              <Board onClick={(i)=>this.onClick}
              squares={current.squares}/>
          </div>
      </div>
    )
  }
}

