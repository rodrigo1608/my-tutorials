import { X, O } from './Icons';

interface SquareProps {
    currentSymbol: string | null;
    handleSquareAction: () => void;
}

function Square({ handleSquareAction, currentSymbol }: SquareProps) {

    let interactiveClasses = currentSymbol === null
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
        border-slate-300       
        ${interactiveClasses}`}
        
            onClick={handleSquareAction}>
            {currentSymbol === 'x' && <X />}
            {currentSymbol === 'o' && <O />}
        </div>
    )
}

export default Square;