import { X, O } from './Icons';

interface SquareProps {

    currentSymbol: string | null;
    hasWinner: boolean;
    rowIndex:number;
    colIndex:number;
    onSquareClick: (rowIndex:number, colIndex:number) => void;

}

function Square({ currentSymbol, hasWinner, rowIndex, colIndex, onSquareClick }: SquareProps) {

    let interactiveClasses = currentSymbol === null && !hasWinner
        ? "hover:bg-gray transition-transform cursor-pointer active:scale-95"
        : "cursor-not-allowed";

    return (
        <div className={`
        p-2        
        flex 
        items-center 
        justify-center        
        bg-radial 
        from-slate-100/50 
        to-slate-200 
        w-full 
        h-full      
        -mr-px -mb-px       
        ${interactiveClasses}`}

            onClick={() => onSquareClick(rowIndex,colIndex)}>
            {currentSymbol === 'x' && <X />}
            {currentSymbol === 'o' && <O />}
        </div>
    )
}

export default Square;