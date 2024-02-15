import { CountdownSettings } from "../types";

import CountdowsWrapper from "./CountdowsWrapper";
import TimeScoreCounter from "./TimeScoreCounter";

type GameViewProps = {
    countdowns: CountdownSettings[];
};

export default function GameView({ countdowns }: GameViewProps) {
    return (
        <>
            <TimeScoreCounter />
            <CountdowsWrapper countdownList={countdowns} />
        </>
    );
}
