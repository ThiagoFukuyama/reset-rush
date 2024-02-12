import { CountdownSettings } from "../types";

import CountdowsWrapper from "./CountdowsWrapper";
import TimeScoreDisplay from "./TimeScoreDisplay";

type GameViewProps = {
    countdowns: CountdownSettings[];
};

export default function GameView({ countdowns }: GameViewProps) {
    return (
        <>
            <TimeScoreDisplay />
            <CountdowsWrapper countdownList={countdowns} />
        </>
    );
}
