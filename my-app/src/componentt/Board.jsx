import React, { useRef, useState } from 'react';
import '../css/Board.css';
//Variables for the board component
//This component renders the board and squares for the Tic Tac Toe game 
export default function Board({ squares, onClick, winnerLine }) {
    const renderSquare = (i) => {
        const isWinnerSquare = winnerLine && winnerLine.includes(i);
        return (
            <button
                className={`square ${isWinnerSquare ? "red" : ""}`}
                onClick={() => onClick(i)}
            >
                {squares[i]}
            </button>
        )
    }



    return (

        <div className="board">

            {[0, 1, 2].map((row) => (
                <div key={row} className="board-row">
                    {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
                </div>
            ))}


        </div>
    );
}
