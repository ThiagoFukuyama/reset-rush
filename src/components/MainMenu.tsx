import Button from "./Button";

type MainMenuProps = {
    countdownCount: number;
    setCountdownCount: React.Dispatch<React.SetStateAction<number>>;
    handleStartGame: () => void;
};

export default function MainMenu({
    countdownCount,
    setCountdownCount,
    handleStartGame,
}: MainMenuProps) {
    return (
        <>
            <Button onClick={handleStartGame} className="mb-7">
                Start
            </Button>
            <div>
                <label htmlFor="countdowns-count" className="text-xl italic">
                    Countdowns:{" "}
                </label>
                <input
                    type="number"
                    id="countdowns-count"
                    className="max-w-16 border-2 text-lg font-semibold text-orange-600 border-gray-700 px-2 py-1 ml-3 rounded-3xl"
                    min={1}
                    value={countdownCount}
                    onChange={(e) =>
                        setCountdownCount(parseInt(e.target.value))
                    }
                />
            </div>
        </>
    );
}
