import { useState } from "react";
import Board from './components/Board';
import Panel from './components/Panel';
import HistoryMobile from './components/HistoryMobile';
import HistoryDesktop from './components/HistoryDesktop';

interface SquareProps {
  row: number;
  column: number;
  value: string | null;
}

interface HistoryEntry {
  board: SquareProps[][];
  clickedSquare: { row: number; column: number; symbol: string } | null; 
}

function App() {

  const initialGame: SquareProps[][] = Array(3).fill(null).map((_, row) =>
    Array(3).fill(null).map((_, column) => (
      {
        row,
        column,
        value: null,
      }
    ))
  );

  const [history, setHistory] = useState<HistoryEntry[]>([
    { board: initialGame, clickedSquare: null }
  ]);

  const [move, setMove] = useState(0);

  const xIsNext = move % 2 === 0;
  const currentBoard = history[move].board;
  const winner = calculateWinner(currentBoard);
  const hasWinner = winner !== null;

  let currentSymbol: string = xIsNext ? 'x' : 'o';

  function onFirst() {
    setMove(0);
  }

  function onNext() {
    setMove(Math.min(history.length - 1, move + 1));
  }

  function onPrevious() {
    setMove(Math.max(0, move - 1));
  }

  function onLast() {
    setMove(history.length - 1);
  }

  function handleSquareAction(row: number, column: number) {

    const currentSquare = currentBoard[row][column];

    if (currentSquare.value || hasWinner) return

    const boardCopy: SquareProps[][] = currentBoard.map((r, rowIndex) => r.map(

      (square, colIndex) => {

        if (rowIndex === row && colIndex === column) {
          return { ...square, value: currentSymbol }
        };

        return square

      }));

    const updatedHistory = history.slice(0, move + 1);

    setMove(move + 1);
    setHistory([
      ...updatedHistory,
      {
        board: boardCopy,
        clickedSquare: {
          row,
          column,
          symbol: currentSymbol
        }
      }
    ]);

  }

  const isTie = !hasWinner && currentBoard.every(row => row.every(square => square.value !== null));

  return (

    <div className="flex flex-col h-screen items-center px-2 w-full md:px-0 bg-light text-dark-gray">

      <header className="py-8 w-full flex items-center justify-center">
        <img src="./symbols/logo_stacked.svg" alt="" width="44px" />
      </header>

      <main className="bg-gray p-2 rounded-4xl grid grid-cols-1 md:grid-cols-[auto_1fr] md:grid-rows-[auto_1fr] gap-2">

        <div className="md:col-start-2 md:row-start-1">
          <Panel currentSymbol={currentSymbol} hasWinner={hasWinner} isTie={isTie} winnerSymbol={winner} />
        </div>

        <div className="md:col-start-1 md:row-start-1 md:row-span-2">
          <Board board={currentBoard} hasWinner={hasWinner} handleSquareAction={handleSquareAction} />
        </div>

        <div className="md:col-start-2 md:row-start-2 rounded-2xl flex flex-col justify-between h-full ">

          <div className="hidden md:block flex-grow overflow-y-auto">
            <HistoryDesktop history={history} currentMove={move} onFirst={onFirst} onLast={onLast} onNext={onNext} onPrevious={onPrevious} />
          </div>

          <div className="w-full md:hidden">
            <HistoryMobile currentMove={move} amountMoves={(history.length - 1)} onFirst={onFirst} onLast={onLast} onNext={onNext} onPrevious={onPrevious} />
          </div>

        </div>

      </main>

    </div>
  )
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

export default App
