import React from 'react';
import Square from './Squre';
import "../App.css";

export default function Board(props) {
    const renderSqure = (i) => {
        return <Square value={props.squares[i]}
        onClick={()=>props.onClick(i)}
        />
    }
    return (
        <div>
            <div className='border-row'>
                {renderSqure(0)}
                {renderSqure(1)}
                {renderSqure(2)}
            </div>
            <div className='border-row'>
                {renderSqure(3)}
                {renderSqure(4)}
                {renderSqure(5)}
            </div>
            <div className='border-row'>
                {renderSqure(6)}
                {renderSqure(7)}
                {renderSqure(8)}
            </div>
        </div>
    )
}
