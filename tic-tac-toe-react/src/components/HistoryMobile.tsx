import HistoryButton from './HistoryButton';

interface HistoryMobilePrps {
    currentMove: number;
    amountMoves: number;
    onNext: () => void;
    onPrevious: () => void;
    onFirst: () => void;
    onLast: () => void;
}

function HistoryMobile({ currentMove, amountMoves, onNext, onPrevious, onFirst, onLast }: HistoryMobilePrps) {
    
    const isAbsoluteStartOfGame = amountMoves === 0;
    const isAtFirstMove = currentMove === 0;
    const isAtLastMove = currentMove === amountMoves;

    const disableBackward = isAbsoluteStartOfGame || isAtFirstMove;
    const disableForward = isAbsoluteStartOfGame || isAtLastMove;

    return (
        <div className='p-2 rounded-full justify-between items-center w-full flex bg-light'>
            <div className="flex gap-2">
                <HistoryButton handleClick={onFirst} variant={'first'} isDisabled={disableBackward} />
                <HistoryButton handleClick={onPrevious} variant={'previous'} isDisabled={disableBackward} />
            </div>
            <span className='font-semibold'>Turn {currentMove} of {amountMoves}</span>

            <div className="flex gap-2">
                <HistoryButton handleClick={onNext} variant={'next'} isDisabled={disableForward} />
                <HistoryButton handleClick={onLast} variant={'last'} isDisabled={disableForward} />
            </div>
        </div>)

}

export default HistoryMobile;