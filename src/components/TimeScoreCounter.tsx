import { useEffect } from "react";

import { useTimeScore } from "../context/TimeScoreContext";
import { useStopwatch } from "../hooks/useStopwatch";

import { formatTime } from "../utils";

export default function TimeScoreCounter() {
    const { score, setScore } = useTimeScore();
    const { elapsedTime } = useStopwatch();

    useEffect(() => {
        setScore(formatTime(elapsedTime));
    }, [elapsedTime]);

    return (
        <span className="absolute top-5 right-8 text-lg font-semibold">
            {score}
        </span>
    );
}
