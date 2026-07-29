import { useState } from "react";
import Square from './Square';

interface SquareProps {
    row: number;
    column: number;
    value: string | null
}

function Board() {

    const initialBoard: SquareProps[][] = Array(3).fill(null).map((_, row) =>
        Array(3).fill(null).map((_, column) => (
            {
                row,
                column,
                value: null,               
            }
        ))
    );

    const [board, setBoard] = useState(initialBoard);
    const [xIsNext, setXIsNext] = useState(true);    

    let currentSymbol: string | null = xIsNext ? 'x' : 'o';

    function handleSquareAction(row: number, column: number) {

        if (board[row][column].value) return

        const boardCopy: SquareProps[][] = board.map((r, rowIndex) => r.map(

            (square, colIndex) => {

                if (rowIndex === row && colIndex === column) {
                    return { ...square, value: currentSymbol}
                };

                return square

            }));

            setXIsNext(!xIsNext);
            setBoard(boardCopy);
    }

    return (<div className="flex bg-slate-300">{board.map(
        (row, rowIndex) =>
            <div key={rowIndex}>
                {row.map((_, colIndex) =>
                    <Square key={`${rowIndex}-${colIndex}`} 
                    handleSquareAction={() => handleSquareAction(rowIndex,colIndex)} 
                    currentSymbol={board[rowIndex][colIndex].value}/>)}
            </div>
    )}
    </div>)
}

export default Board;