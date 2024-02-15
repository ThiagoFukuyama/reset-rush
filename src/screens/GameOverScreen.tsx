import { useGameOver } from "../context/GameOverContext";
import { useTimeScore } from "../context/TimeScoreContext";

import Button from "../components/Button";

export default function GameOverScreen() {
    const { score, resetScore } = useTimeScore();
    const { resetGameOver } = useGameOver();

    function handleResetGame() {
        resetScore();
        resetGameOver();
    }

    return (
        <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-6xl text-red-600 italic mb-9">Game Over!</h1>
            <p className="text-xl mb-7">
                Your time:{" "}
                <span className="text-blue-500 font-semibold text-2xl">
                    {score}
                </span>
            </p>
            <Button onClick={handleResetGame}>Back to main screen</Button>
        </div>
    );
}
