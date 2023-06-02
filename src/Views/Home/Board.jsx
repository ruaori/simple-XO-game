import { useState } from 'react';
import '../../App.css';
import Square from './Square';
import { calcWinner } from './GamePlay';
const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(true);

    const winner = calcWinner(squares);
    let status;
    if (winner) {
        status = 'Winner is: ' + winner;
    }
    else {
        status = "next player: " + (isNext ? "X" : "O");
    }

    const handleClick = (i) => {

        if (squares[i] || calcWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (isNext) {
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O";
        }
        setIsNext(!isNext);
        setSquares(nextSquares);
    }

    const handleReset = () => {
        setSquares(Array(9).fill(null));
        setIsNext(true);
    }


    return (
        <div className='board'>
            <div className='status'>
                {status}
            </div>
            <div className='board-row'>
                <Square value={squares[0]} handleSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} handleSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} handleSquareClick={() => handleClick(2)} />
            </div>
            <div className='board-row'>
                <Square value={squares[3]} handleSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} handleSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} handleSquareClick={() => handleClick(5)} />
            </div>
            <div className='board-row'>
                <Square value={squares[6]} handleSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} handleSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} handleSquareClick={() => handleClick(8)} />
            </div>
            <div className='reset-game'>
                <button className='reset-btn' onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default Board;