import React, { useEffect, useState } from 'react';
import Board from './Board';
import CheckForWinner from './checkForWinner';
import Winner from './Winner';

export default function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [count, setCount] = useState([0, 0]);
    const [winnerLine, setWinnerLine] = useState(null);
    const [isGameFinish, setIsGameFinish] = useState(false);
    const [againstComputer, setAgainstComputer] = useState(true);



    const handleClick = (index) => {
        if (squares[index] || winnerLine) return; // חוסם לחיצות אם יש כבר מנצח
        const newSquares = [...squares];

        if (xIsNext && !winnerLine) {
            newSquares[index] = 'X';
            setCount(prev => [prev[0] + 1, prev[1]]);
            setSquares(newSquares);
            setXIsNext(false);
        }

        // בדיקה האם המשחק נגמר (המחשב עשה 4 מהלכים)
        setCount(prev => {
            if (prev[1] + 1 >= 4) setIsGameFinish(true);
            return prev;
        });

        const possibleWinner = Check(newSquares);
        if (!possibleWinner && xIsNext) {
            setTimeout(() => {
                makeComputerMove(newSquares);
            }, 500);
        }
    };

    const makeComputerMove = (currentSquares) => {
        const emptyIndices = currentSquares
            .map((val, idx) => (val === null ? idx : null))
            .filter((val) => val !== null);

        if (emptyIndices.length === 0) return;

        const index = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        const newSquares = [...currentSquares];
        newSquares[index] = 'O'; // המחשב הוא תמיד "O"
        setCount(prev => [prev[0], prev[1] + 1]);
        setSquares(newSquares);
        // בדיקת ניצחון אחרי מהלך המחשב
        const winner = Check(newSquares);
        if (winner) return;
        setXIsNext(true); // מחזיר את התור לשחקן
    };

    const Check = (newSquares) => {
        const isWinner = CheckForWinner(newSquares);
        if (isWinner) {
            setWinnerLine(isWinner);
            setSquares(newSquares);
            setIsGameFinish(true);

            return isWinner;
        }
        return null;
    }

    const handleNewGame = () => {
        setSquares(Array(9).fill(null)); // מאתחל לוח ריק
        setXIsNext(true);
        setCount([0, 0]); // מאתחל מונה
        setWinnerLine(null)
        setIsGameFinish(false)
    };

    return (
        <div>

            <button onClick={handleNewGame}>משחק חדש</button>
            <Board squares={squares} onClick={handleClick} winnerLine={winnerLine} />
            {(winnerLine || isGameFinish) && <Winner winnerLine={winnerLine} squares={squares} />}
        </div>


    );
}
