import { X, O } from './Icons';

interface SquareProps {

    currentSymbol: string | null;
    isWinner: boolean;
    handleSquareAction: () => void;

}

function Square({ currentSymbol, isWinner, handleSquareAction }: SquareProps) {

    let interactiveClasses = currentSymbol === null && !isWinner
        ? "hover:bg-white transition-transform cursor-pointer active:scale-95"
        : "cursor-not-allowed";

    return (
        <div className={`p-2        
        flex 
        items-center 
        justify-center        
        bg-radial 
        from-slate-100/50 
        to-slate-200 
        w-24 
        h-24
        border
        border-slate-400
        -mr-px -mb-px       
        ${interactiveClasses}`}

            onClick={handleSquareAction}>
            {currentSymbol === 'x' && <X />}
            {currentSymbol === 'o' && <O />}
        </div>
    )
}

export default Square;