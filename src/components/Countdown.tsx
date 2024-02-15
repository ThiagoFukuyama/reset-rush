import { useGameOver } from "../context/GameOverContext";
import { useCountdown } from "../hooks/useCountdown";

import type { CountdownSettings } from "../types";
import { getRandomNumber } from "../utils";

type CountdownProps = {
    countdown: CountdownSettings;
};

export default function Countdown({ countdown }: CountdownProps) {
    const { initialTime, speed } = countdown;

    const { setGameIsOver } = useGameOver();

    const { count, reset } = useCountdown(
        initialTime,
        () => setGameIsOver(),
        speed
    );

    const randomMovementStyles = {
        transform: `translate(${getRandomNumber(20, 30)}px, ${getRandomNumber(
            20,
            70
        )}px)`,
    };

    return (
        <div
            className="flex flex-col justify-center items-center text-center transition-all"
            style={randomMovementStyles}
        >
            <p
                className={`text-4xl font-extrabold mb-5 italic ${
                    count > 3 ? "text-blue-600" : "text-red-600"
                }`}
            >
                {count}
            </p>
            <button
                onClick={reset}
                onFocus={(e) => e.target.blur()}
                className="bg-red-600 text-white px-10 py-3 font-semibold uppercase rounded-3xl italic"
            >
                Reset
            </button>
        </div>
    );
}
