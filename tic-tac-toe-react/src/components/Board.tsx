import { useState } from "react";
import Square from './Square';

interface SquareProps {
    row: number;
    column: number;
    value: string | null;    
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

    const winner = calculateWinner(board);

    const hasWinner = winner !== null;

    let currentSymbol: string = xIsNext ? 'x' : 'o';

    function handleSquareAction(row: number, column: number) {

        const currentSquare = board[row][column];

        if (currentSquare.value || hasWinner) return

        const boardCopy: SquareProps[][] = board.map((r, rowIndex) => r.map(

            (square, colIndex) => {

                if (rowIndex === row && colIndex === column) {
                    return { ...square, value: currentSymbol }
                };

                return square

            }));

        setXIsNext(!xIsNext);
        setBoard(boardCopy);
    }

    return (<div className="
        flex 
        flex-col 
        w-[96vw] 
        min-w-[340px] 
        max-w-[400px] 
        aspect-square gap-1
        rounded-3xl
        overflow-hidden">{board.map(
        (row, rowIndex) =>
            <div className="flex gap-1 h-full" key={rowIndex}>
                {row.map((_, colIndex) => {

                    const currentSquare = board[rowIndex][colIndex];                   

                    return <Square key={`${rowIndex}-${colIndex}`}
                        currentSymbol={currentSquare.value}
                        isWinner={hasWinner}
                        rowIndex={rowIndex}
                        colIndex={colIndex}
                        onSquareClick={handleSquareAction}
                    /> }
                )}
            </div>
    )}

    </div>)
}

function calculateWinner(board: SquareProps[][]) {

    const winningCombinations = [

        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],

        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],

        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
    ];

    for (const combination of winningCombinations) {
        const [[row0, col0], [row1, col1], [row2, col2]] = combination;

        const firstSquareSymbol = board[row0][col0].value;
        const secondSquareSymbol = board[row1][col1].value;
        const thirdSquareSymbol = board[row2][col2].value;

        const isWinningCombination = firstSquareSymbol && firstSquareSymbol == secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol;

        if (isWinningCombination) return firstSquareSymbol

    }

    return null;
}

export default Board;