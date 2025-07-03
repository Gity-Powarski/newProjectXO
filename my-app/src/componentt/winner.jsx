import Confetti from 'react-confetti';

export default function Winner({ winnerLine, squares }) {
    var symbol;
    if (winnerLine) {
        symbol = `  ${squares[winnerLine[0]]}: השחקן שניצח`;
    }
    else symbol = ':( אין שחקן שניצח'

    const [width, height] = [window.innerWidth, window.innerHeight];

    return (
        <>{winnerLine && <Confetti width={width} height={height} />}

            <div className="winner-message">
                {symbol}
            </div>
        </>
    );
}