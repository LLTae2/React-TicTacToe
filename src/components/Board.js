import React, { Component } from 'react';
import Square from './Squre';
import "../App.css";

export default class Board extends Component {
  renderSqure(i) {
      return <Square value={this.props.squares[i]}
      onClick={()=>this.props.onCLick(i)}
      />
  }
  render() {
    return (
      <div>
          <div className='border-row'>
              {this.renderSqure(0)}
              {this.renderSqure(1)}
              {this.renderSqure(2)}
          </div>
          <div className='border-row'>
              {this.renderSqure(3)}
              {this.renderSqure(4)}
              {this.renderSqure(5)}
          </div>
          <div className='border-row'>
              {this.renderSqure(6)}
              {this.renderSqure(7)}
              {this.renderSqure(8)}
          </div>
      </div>
    )
  }
}
