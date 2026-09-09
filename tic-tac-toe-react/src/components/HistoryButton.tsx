import { First, Last, Next, Previous } from './Icons';

const ICON_MAP = {
    first: <First />,
    last: <Last />,
    next: <Next />,
    previous: <Previous />
} as const;

interface HistoryButtonProps {
    variant: keyof typeof ICON_MAP;
    isDisabled: boolean;
    handleClick: () => void
};

function HistoryButton({ variant, isDisabled, handleClick }: HistoryButtonProps) {

    const icon = ICON_MAP[variant];

    return (

        <div onClick={isDisabled ? undefined : handleClick} className={
            `rounded-full w-fit bg-lighter hover:bg-gray cursor-pointer transform transition-transform active:scale-90 duration-150 
        ${isDisabled?'opacity-30 cursor-not-allowed scale-100 bg-lighter':''}`}>
            {icon}
        </div>
    )

}

export default HistoryButton;