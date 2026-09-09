import { X, O } from './Icons';
import HistoryButton from './HistoryButton';
import { useEffect, useRef } from 'react'; 

interface SquareProps {
    row: number;
    column: number;
    value: string | null;
}

interface HistoryEntry {
  board: SquareProps[][];
  clickedSquare: { row: number; column: number; symbol: string } | null;
}

interface HistoryDesktopProps {
    history: HistoryEntry[];
    currentMove:number;
    onNext: () => void;
    onPrevious: () => void;
    onFirst: () => void;
    onLast: () => void;
}

function HistoryDesktop({ history, currentMove, onNext, onPrevious, onFirst, onLast }: HistoryDesktopProps) {

    const isAbsoluteStartOfGame = history.length <= 1;
    const isAtFirstMove = currentMove === 0;
    const isAtLastMove = currentMove === history.length - 1;

    const disableBackward = isAbsoluteStartOfGame || isAtFirstMove;
    const disableForward = isAbsoluteStartOfGame || isAtLastMove;    

    const listRef = useRef<HTMLUListElement>(null);

     useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTo({
                top: listRef.current.scrollHeight,
                behavior: 'smooth' 
            });
        }
    }, [history.length]);

    const historyLabels = history.map(({ clickedSquare }, move) => {
        
        if (move === 0 || !clickedSquare) {
            
            return null;
        }
        
        const { symbol, row, column } = clickedSquare;
        const currentSymbolComponent = symbol === 'x' ? <X sizeClass='w-5 h-5' /> : <O sizeClass='w-5 h-5' />;
        
        const isCurrentMove = move === currentMove;
        
        return (
            <li key={move} className={`grid grid-cols-[1.5rem_auto_1rem_auto] gap-x-3 items-center w-full px-4 py-1 text-sm font-medium text-dark ${isCurrentMove ? 'bg-lighter rounded-full':''}`}>
                
                <span className="text-right ">{move}.</span>               
                
                <div className="flex justify-center items-center">
                    {currentSymbolComponent}
                </div>     
                
                <span className=" text-center">→</span>
                
                <span className="">
                    ({row + 1}:{column + 1})
                </span>
            </li>
        );
    });

    return (
        <div className="w-full h-full gap-2 flex flex-col">
                       
            <div className="bg-light rounded-3xl pb-4 pt-2 flex flex-col flex-grow items-center">
                
                <h3 className="text-xs font-bold  tracking-wider uppercase mb-2">History</h3>               
                
                <div className="w-full border-b border-gray mb-3"></div>
                               
                <ul className="w-full flex flex-col gap-2 overflow-y-auto max-h-50" ref={listRef}>
                    
                    {historyLabels}
                </ul>
            </div>
            
            <div className="flex justify-between bg-light py-1 px-2 gap-2 rounded-full items-center">
                <div className="flex gap-1">
                    <HistoryButton handleClick={onFirst} variant={'first'} isDisabled={disableBackward}/>
                    <HistoryButton handleClick={onPrevious} variant={'previous'} isDisabled={disableBackward}/>
                </div>
                <div className="flex gap-1">
                    <HistoryButton handleClick={onNext} variant={'next'} isDisabled={disableForward}/>
                    <HistoryButton handleClick={onLast} variant={'last'} isDisabled={disableForward}/>
                </div>
            </div>

        </div>
    );
}

export default HistoryDesktop;
