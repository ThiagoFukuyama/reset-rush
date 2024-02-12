import { useState } from "react";

import type { CountdownSettings } from "../types";
import { getRandomNumber } from "../utils";

import {
    MIN_COUNTDOWN_TIME,
    MAX_COUNTDOWN_TIME,
    MIN_COUNTDOWN_SPEED,
    MAX_COUNTDOWN_SPEED,
} from "../constants/";

import MainMenu from "../components/MainMenu";
import GameView from "../components/GameView";

export default function MainScreen() {
    const [countdowns, setCountdowns] = useState<CountdownSettings[]>([]);
    const [countdownCount, setCountdownCount] = useState(8);

    const isGameStarted = countdowns.length > 0;

    function handleStartGame() {
        setCountdowns(
            Array.from({ length: countdownCount }, () => ({
                id: crypto.randomUUID(),
                initialTime: getRandomNumber(
                    MIN_COUNTDOWN_TIME,
                    MAX_COUNTDOWN_TIME
                ),
                speed: getRandomNumber(
                    MIN_COUNTDOWN_SPEED,
                    MAX_COUNTDOWN_SPEED
                ),
            }))
        );
    }

    return !isGameStarted ? (
        <MainMenu
            countdownCount={countdownCount}
            setCountdownCount={setCountdownCount}
            handleStartGame={handleStartGame}
        />
    ) : (
        <GameView countdowns={countdowns} />
    );
}
