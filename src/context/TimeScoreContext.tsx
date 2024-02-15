import { createContext, useContext, useState } from "react";

import type { TimeScore } from "../types";
import { DEFAULT_SCORE } from "../constants";

type TimeScoreContext = {
    score: string;
    setScore: (score: TimeScore) => void;
    resetScore: () => void;
};

const TimeScoreContext = createContext<TimeScoreContext | null>(null);

type TimeScoreContextProviderProps = {
    children: React.ReactNode;
};

export function useTimeScore() {
    const context = useContext(TimeScoreContext);

    if (!context) {
        throw new Error(
            "TimeScoreContext can only be used under TimeScoreContextProvider"
        );
    }

    return context;
}

export function TimeScoreContextProvider({
    children,
}: TimeScoreContextProviderProps) {
    const [score, setScore] = useState<TimeScore>(DEFAULT_SCORE);

    function resetScore() {
        setScore(DEFAULT_SCORE);
    }

    return (
        <TimeScoreContext.Provider
            value={{
                score,
                setScore,
                resetScore,
            }}
        >
            {children}
        </TimeScoreContext.Provider>
    );
}
