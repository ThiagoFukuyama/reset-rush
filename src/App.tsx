import { useGameOver } from "./context/GameOverContext";

import GameOverScreen from "./screens/GameOverScreen";
import MainScreen from "./screens/MainScreen";

function App() {
    const { isGameOver } = useGameOver();

    return (
        <main className="min-h-screen flex justify-center items-center flex-col p-14">
            <h1 className="text-7xl text-orange-500 mb-10 font-bold italic text-center">
                🗲🕒 Reset Rush
            </h1>
            {isGameOver ? <GameOverScreen /> : <MainScreen />}
        </main>
    );
}

export default App;
