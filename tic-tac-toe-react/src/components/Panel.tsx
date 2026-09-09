import { X, O } from './Icons';

interface PanelProps {

    currentSymbol: string | null;
    hasWinner: boolean;
    winnerSymbol: string | null;
    isTie: boolean
}

function Panel({ currentSymbol, hasWinner, winnerSymbol, isTie }: PanelProps) {

    const baseIconContainerStyles = "rounded w-fit p-1";
    const inactiveStyles = "opacity-50 bg-gray";

    let panelContent = (
        <div className="gap-2 px-2 flex flex-col items-center">
            <span className="capitalize text-xs font-semibold">current player turn</span>
            <div className="flex gap-2">
                <div className={`${baseIconContainerStyles} ${currentSymbol !== 'x' ? inactiveStyles : 'bg-lighter'}`}>{<X sizeClass="w-6" />}</div>
                <div className={`${baseIconContainerStyles} ${currentSymbol !== 'o' ? inactiveStyles : 'bg-lighter'}`}> {< O sizeClass="w-6" />}</div>
            </div>
        </div >
    );

    if (isTie) {
        panelContent = (
            <div className="gap-2 flex my-3  py-2 px-4 bg-lighter flex-col px-4 rounded-full items-center">
                <span className="font-semibold text-lg">It's a Draw!</span>
            </div>
        )
    }

    if (hasWinner) {
        panelContent = (
            <div className="gap-2 my-1 flex justify-center py-2 px-4 rounded-full  bg-lighter items-center">
                {winnerSymbol === 'x' ? <X sizeClass="w-8" /> : <O sizeClass="w-8" />}
                <span className="capitalize font-semibold">wins!</span>
            </div>
        )
    }

    return (
        <div
            className="
        p-2
        flex        
        items-center
        justify-center
        bg-light
        rounded-4xl
        -mr-px
        -mb-px
        gap-2        
      "
        >
            {panelContent}
        </div >

    );
}

export default Panel;