import Square from './Square';

interface SquareProps {
    row: number;
    column: number;
    value: string | null;
}

interface BoardProps {
    board: SquareProps[][];
    handleSquareAction: (rowIndex: number, colIndex: number) => void;
    hasWinner: boolean
}

function Board({ board, handleSquareAction, hasWinner }: BoardProps) {

    return (<div className="
        flex 
        flex-col
        w-[80vw]
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
                        hasWinner={hasWinner}
                        rowIndex={rowIndex}
                        colIndex={colIndex}
                        onSquareClick={handleSquareAction}
                    />
                }
                )}
            </div>
    )}

    </div>)
}


export default Board;